import { INestApplication, ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import * as rateLimit from 'express-rate-limit';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app/app.module';
import { setupHttp } from './http';
import { setupRedoc } from './redoc';
import { setupSwagger } from './swagger';
import helmet = require('helmet');

async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, {
    // https://www.npmjs.com/package/nestjs-pino#usage-as-nestjs-app-logger
    logger: false,
  });
  const logger = app.get(Logger);
  app.useLogger(logger);
  const cfg = app.get(ConfigService);
  logger.log('App module initialized');

  // const reflector = app.get(Reflector);
  // // reflector.app.useGlobalFilters(
  // //   new HttpExceptionFilter(reflector),
  // //   new QueryFailedFilter(reflector),
  // // );
  // app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  app.useGlobalPipes(
    new ValidationPipe({
      // https://docs.nestjs.com/techniques/validation#transform-payload-objects
      transform: true,
      // https://docs.nestjs.com/techniques/validation#stripping-properties
      whitelist: true,
      forbidNonWhitelisted: true,
      skipMissingProperties: false,
      forbidUnknownValues: true,
    }),
  );

  const corsConfig = cfg.get<CorsOptions>('cors');

  logger.log('Setting cors configuration %o', 'main.bootstrap', corsConfig);

  if (process.env.NODE_ENV !== 'development') {
    app.enableCors(corsConfig);
    app.use(helmet());
    app.use(rateLimit(cfg.get('ratelimit')));
  }

  app.setGlobalPrefix(cfg.get<string>('app.globalPrefix', 'api'));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.enableShutdownHooks();
  process.on('SIGINT', () => {
    logger.log('SIGINT detected');
  });

  return app;
}

bootstrap()
  .then((app: INestApplication) => setupSwagger(app))
  .then(({ app, spec }) => setupRedoc(app, spec))
  .then((app: INestApplication) => setupHttp(app));
