import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from '@slx/api-auth';
import { UserModule } from '@slx/api-user';
import { LoggerModule, Params } from 'nestjs-pino';
import { resolve } from 'path';
import { AppService } from './app.service';
import cfgs from './config';

console.log(resolve(__dirname, '..', '..', '.env.api.production'));
@Module({
  imports: [
    ConfigModule.forRoot({
      load: cfgs,
      envFilePath: [
        // if ..env.api.production.disabled exists...
        resolve(__dirname, '..', '..', '.env.api.production'),
        // if not ...
        resolve(__dirname, '..', '..', '.env.api.development'),
      ],
      expandVariables: true,
      isGlobal: true,
    }),

    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (cfg: ConfigService) => cfg.get<Params>('logger'),
    }),
    // I18nModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => configService.get('i18n'),
    //   parser: I18nJsonParser,
    //   inject: [ConfigService],
    // }),
    // SequelizeModule.forRootAsync({
    //   imports: [LoggerModule],
    //   useFactory: (logger: Logger) => ({
    //     database: 'api-database',
    //     dialect: 'sqlite',
    //     autoLoadModels: true,
    //     synchronize: true,
    //     logQueryParameters: true,
    //     repositoryMode: true,
    //     logging: (sql) => logger.verbose(sql, 'SEQUELIZE'),
    //     storage: resolve(process.cwd(), 'api-database.sqlite'),
    //   }),
    //   inject: [Logger],
    // }),

    // SequelizeModule.forRootAsync({
    //   database: 'api-database',
    //   dialect: 'sqlite',
    //   autoLoadModels: true,
    //   synchronize: true,
    //   logQueryParameters: true,
    //   logging: true,
    //   storage: resolve(process.cwd(), 'api-database.sqlite'),
    //   // https://github.com/RobinBuschmann/sequelize-typescript#model-path-resolving
    //   // models: [resolve(process.cwd(), 'libs', 'api') + '/**/*.model.ts'],
    //   // modelMatch: (filename, member) => {
    //   //   return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
    //   // },
    // }),

    // ApiDatabaseModule,
    AuthModule,
    UserModule,
    // PostModule,
  ],
  providers: [AppService],
})
export class AppModule {}
