import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiAuthModule } from '@slx/api-auth';
import { ApiCoreModule } from '@slx/api-core';
import { ApiUserModule } from '@slx/api-user';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import { LoggerModule } from 'nestjs-pino';
import '../polyfills';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import cfgs from './config';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: cfgs,
      expandVariables: true,
      isGlobal: true,
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (cfg: ConfigService) => cfg.get('logger'),
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.get('i18n'),
      imports: [ApiCoreModule],
      parser: I18nJsonParser,
      inject: [ConfigService],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => cfg.get('sequelize') || {},
    }),
    ApiCoreModule,
    ApiAuthModule,
    ApiUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // static forRoot(options: { services: Provider[]; passportProviders: Provider[] }): DynamicModule {
  //   return {
  //     module: AppModule,
  //     imports: [SlxApiCoreModule.forRoot(options), SlxApiAuthModule.forRoot(options)],
  //     services: [...options.services, ...(options.passportProviders ? options.passportProviders : [])],
  //   };
  // }
}
