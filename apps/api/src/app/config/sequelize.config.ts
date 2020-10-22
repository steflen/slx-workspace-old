import { registerAs } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { resolve } from 'path';

export default registerAs(
  'sequelize',
  () =>
    ({
      database: 'api-database',
      dialect: 'sqlite',
      autoLoadModels: true,
      synchronize: true,
      logQueryParameters: true,
      logging: true,
      storage: resolve(process.cwd(), 'api-database.sqlite'),
      // https://github.com/RobinBuschmann/sequelize-typescript#model-path-resolving
      models: [resolve(process.cwd(), 'libs', 'api') + '/**/*.model.ts'],
      modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
      },
    } as SequelizeModuleOptions),
);
