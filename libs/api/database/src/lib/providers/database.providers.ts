import { Logger, LoggerModule } from 'nestjs-pino';
import { Sequelize } from 'sequelize-typescript';
import path = require('path');

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    imports: [LoggerModule],
    inject: [Logger],
    useFactory: async (logger: Logger) => {
      try {
        const sequelize = new Sequelize({
          database: 'api-database',
          dialect: 'sqlite',
          logQueryParameters: true,
          repositoryMode: true,
          logging: (sql) => logger.verbose(sql, 'SEQUELIZE'),
          storage: path.resolve(process.cwd(), 'api-database.sqlite'),
          // https://github.com/RobinBuschmann/sequelize-typescript#model-path-resolving
          models: [path.resolve(process.cwd(), 'libs', 'api') + '/**/*.model.ts'],
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
        // To recreate database tables, uncomment this.
        // await sequelize.sync({ force: true }); // Force set to true, will drop all tables and create new ones.
        return sequelize;
      } catch (err) {
        logger.warn('Error while initialization of database');
        logger.warn(err);
      }
    },
  },
];
