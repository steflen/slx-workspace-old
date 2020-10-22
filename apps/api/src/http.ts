import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';

export async function setupHttp(app: INestApplication): Promise<INestApplication> {
  const cfg = app.get(ConfigService);
  const logger = app.get(Logger);
  await app.listen(cfg.get('http.port'), cfg.get('http.hostname'), () =>
    logger.log(
      `Listening at http://${cfg.get('http.hostname')}:${cfg.get('http.port')}/${cfg.get('app.globalPrefix')}`,
    ),
  );
  return app;
}
