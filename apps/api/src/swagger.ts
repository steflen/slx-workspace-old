import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

export async function setupSwagger(app: INestApplication): Promise<void> {
  const cfg = app.get(ConfigService);
  const logger = app.get(Logger);
  const options = new DocumentBuilder()
    .setTitle(cfg.get('swagger.title', 'super title'))
    .setDescription(cfg.get('swagger.description', 'super description'))
    .setVersion(cfg.get('swagger.version', 'beta'))
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  logger.log(
    `Starting Swagger-UI at http://${cfg.get('http').hostname}:${cfg.get('http').port}/${cfg.get('swagger').path}`,
  );
  SwaggerModule.setup(cfg.get('swagger').path, app, document);
}
