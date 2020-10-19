import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import * as path from 'path';

export default registerAs(
  'typeorm',
  () =>
    ({
      type: 'sqlite',
      database: 'api.db',
      entities: [path.resolve(process.cwd(), 'libs', 'api') + '/**/*.entity.ts'],
      // migrations: migrations,
      // subscribers: subscribers,
      logging: 'all',
      synchronize: false,
      // cli: {
      //   migrationsDir: migrationsDir,
      // },
      // connectString: new ConnectionString(process.env.DATABASE_URL || 'sqlite://database/sqlitedb.db'),
    } as TypeOrmModuleOptions),
);
