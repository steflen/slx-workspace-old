import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '@slx/api-auth';
import { UserModule } from '@slx/api-user';
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
      useFactory: async (cfg: ConfigService) => cfg.get('logger'),
    }),
    // I18nModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => configService.get('i18n'),
    //   imports: [ApiCoreModule],
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
export class AppModule {}
