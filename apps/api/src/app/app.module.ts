import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApiUserModule } from '@slx/api-user';
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
      useFactory: (cfg: ConfigService) => cfg.get('logger') || {},
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => cfg.get('sequelize') || {},
    }),
    ApiUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
