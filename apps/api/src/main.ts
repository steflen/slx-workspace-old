import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { resolve } from 'path';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';
import { AppModule } from './app/app.module';
import { setupSwagger } from './swagger';
const dotConfig = dotenv.config({ path: resolve(__dirname, 'assets', '.env.api.example') });

async function bootstrApp(): Promise<Logger> {
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();

  const app = await NestFactory.create(AppModule, { logger: true });
  const cfg: ConfigService<Record<string, any>> = app.get(ConfigService);
  const log: Logger = app.get(Logger);
  const reflector = app.get(Reflector);
  // reflector.app.useGlobalFilters(
  //   new HttpExceptionFilter(reflector),
  //   new QueryFailedFilter(reflector),
  // );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  const prefix: string = cfg.get<string>('env.globalPrefix', 'api-app');
  const port: number = cfg.get<number>('http.port', 8888);
  const hostname: string = cfg.get<string>('http.host', '127.0.0.1');
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(log);
  app.enableCors(cfg.get('cors'));
  app.use(helmet());
  app.use(rateLimit(cfg.get('ratelimit')));
  app.enableShutdownHooks();
  app.setGlobalPrefix(prefix);

  setupSwagger(app);
  log.log(`Swagger-UI serverd at http://${hostname}:${port}/swagger`);
  await app.listen(port, hostname, () => log.log(`Listening at http://${hostname}:${port}/${prefix}`));

  return log;
}

bootstrApp()
  .then((log) => {
    log.log('App initialization successful');
    process.on('SIGINT', function () {
      log.log('>>>> bye bye');
    });
  })
  .catch((err) => {
    console.log('ERROR');
    console.log(err);
    console.error(err);
  });
