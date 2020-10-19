import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { resolve } from 'path';
import { AppModule } from './app/app.module';

const dotConfig = dotenv.config({ path: resolve(__dirname, 'assets', '.env') });

async function bootstrApp(): Promise<Logger> {
  const app = await NestFactory.create(AppModule, { logger: true });
  const cfg: ConfigService<Record<string, any>> = app.get(ConfigService);
  const log: Logger = app.get(Logger);

  const prefix: string = cfg.get<string>('env.globalPrefix', 'api-app');
  const port: number = cfg.get<number>('http.port', 8888);
  const hostname: string = cfg.get<string>('http.host', '127.0.0.1');

  app.useLogger(log);
  app.enableCors(cfg.get('cors'));
  app.use(helmet());
  app.use(rateLimit(cfg.get('ratelimit')));
  app.enableShutdownHooks();
  app.setGlobalPrefix(prefix);

  const documentBuilder = new DocumentBuilder()
    .setTitle(cfg.get<string>('project.package.name', 'api-app'))
    .setDescription(cfg.get<string>('project.package.name', 'super duper api app'))
    .setVersion(cfg.get<string>('project.package.name', 'beta'));
  // .addBearerAuth({ name: 'Authorization' }, 'header');
  SwaggerModule.setup('/swagger', app, SwaggerModule.createDocument(app, documentBuilder.build()));

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
