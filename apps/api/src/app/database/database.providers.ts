import { Logger } from 'nestjs-pino';
import { resolve } from 'path';
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (logger: Logger) => {
      try {
        const sequelize = new Sequelize({
          database: 'api-database',
          dialect: 'sqlite',
          logQueryParameters: true,
          // sql is printed to verbose log!
          logging: (sql) => logger.verbose(sql, 'SEQUELIZE'),
          storage: resolve(process.cwd(), 'api-database.sqlite'),
          // https://github.com/RobinBuschmann/sequelize-typescript#model-path-resolving
          models: [resolve(process.cwd(), 'libs', 'api') + '/**/*.model.ts'],
          modelMatch: (filename, member) => {
            return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
          },
        });
        await sequelize.sync();
        logger.log(
          'Sequelize initialized with models: %o',
          'database.providers',
          Object.entries(sequelize.models).map(([k, v]) => k),
        );
        throw 'test';
        return sequelize;
      } catch (err) {
        logger.error(err);
      }
    },
    inject: [Logger],
  },
];
