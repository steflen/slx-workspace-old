import { INestApplication, ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app/app.module';
import { setupHttp } from './http';
import { setupSwagger } from './swagger';

// const dotfiles = resolve(__dirname, '..', '.env.api.development');
// const dotConfig = dotenv.config({ path: dotfiles });
let logger: Logger | Console = console;

async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, {
    // https://www.npmjs.com/package/nestjs-pino#usage-as-nestjs-app-logger
    logger: false,
  });
  logger = app.get(Logger);
  app.useLogger(logger);
  const cfg = app.get(ConfigService);
  logger.log('App module initialized');
  // const reflector = app.get(Reflector);
  // // reflector.app.useGlobalFilters(
  // //   new HttpExceptionFilter(reflector),
  // //   new QueryFailedFilter(reflector),
  // // );
  // app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  app.useGlobalPipes(new ValidationPipe());
  const corsConfig = cfg.get<CorsOptions>('cors');
  logger.log('Setting cors configuration %o', 'main.bootstrap', corsConfig);
  app.enableCors(corsConfig);
  app.use(helmet());
  app.use(rateLimit(cfg.get('ratelimit')));
  app.enableShutdownHooks();

  app.setGlobalPrefix(cfg.get<string>('app.globalPrefix', 'api'));

  return app;
}

process.on('SIGINT', () => {
  logger.log('SIGINT >>>> bye bye');
});

bootstrap()
  .then((app: INestApplication) => setupSwagger(app))
  .then((app: INestApplication) => setupHttp(app))
  .then((app) => {
    logger.log('App initialization successful');
  })
  .catch((err) => {
    logger.log('ERROR');
    logger.log(err);
    logger.error(err);
  });
