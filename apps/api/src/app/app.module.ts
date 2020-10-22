import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '@slx/api-auth';
import { UserModule } from '@slx/api-user';
import { LoggerModule, PinoLogger } from 'nestjs-pino';
import { resolve } from 'path';
import { AppController } from './app.controller';
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
      useFactory: async (cfg: ConfigService) => cfg.get('logger'),
    }),
    // I18nModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => configService.get('i18n'),
    //   parser: I18nJsonParser,
    //   inject: [ConfigService],
    // }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => cfg.get('sequelize'),
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly log: PinoLogger) {
    log.info('Constructor app module');
  }
}
