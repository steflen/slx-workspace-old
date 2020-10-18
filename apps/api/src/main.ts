import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { resolve } from 'path';
import { AppModule } from './app/app.module';

const cfg = dotenv.config({ path: resolve(__dirname, 'assets', '.env') });
console.log(cfg);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: true });

  const logger = app.get(Logger);
  app.useLogger(logger);

  const cfg = app.get(ConfigService);
  //
  // const globalPrefix = cfg.get('system.globalPrefix');
  // const host = cfg.get('system.host');
  // const port = cfg.get('system.port');
  const systemConfig = cfg.get('system');
  const corsConfig = cfg.get('cors');
  const rateLimitConfig = cfg.get('rateLimit');
  const sequelizeConfig = cfg.get('sequelize');

  logger.debug('Server root', __dirname);
  logger.debug('Process cwd', process.cwd());
  logger.debug('System Config', systemConfig);
  logger.debug('Cors Config', corsConfig);
  logger.debug('Rate Limit Config', rateLimitConfig);
  logger.debug('Sequelize Config', sequelizeConfig);

  app.enableCors(corsConfig);
  app.use(helmet());
  app.use(rateLimit(rateLimitConfig));
  app.enableShutdownHooks();
  app.setGlobalPrefix(systemConfig.globalPrefix);

  await app.listen(systemConfig.port, systemConfig.host, () => {
    logger.log(`Listening at http://${systemConfig.host}:${systemConfig.port}/${systemConfig.globalPrefix}`);
  });

  process.on('SIGINT', function () {
    // db.stop(function(err) {
    //   process.exit(err ? 1 : 0);
    // });
    logger.log('>>>> bye bye');
  });

  return logger;
}

bootstrap()
  .then((logger) => logger.log('App initialization successful'))
  .catch((err) => console.error('ERROR ' + err));
