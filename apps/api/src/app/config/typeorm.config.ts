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
      storage: resolve(process.cwd(), 'api-database.sqlite'),
    } as SequelizeModuleOptions),
);
