import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlxApiCoreModule } from '@slx/api-core';
import { LoggerModule } from 'nestjs-pino';
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
      useFactory: (cfg: ConfigService) => cfg.get('logger'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => cfg.get('typeorm'),
    }),
    PassportModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => cfg.get('passport'),
    }),
    SlxApiCoreModule.forRoot({}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // static forRoot(options: { providers: Provider[]; passportProviders: Provider[] }): DynamicModule {
  //   return {
  //     module: AppModule,
  //     imports: [SlxApiCoreModule.forRoot(options), SlxApiAuthModule.forRoot(options)],
  //     providers: [...options.providers, ...(options.passportProviders ? options.passportProviders : [])],
  //   };
  // }
}
