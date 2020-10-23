import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from 'nestjs-redoc';

export async function setupRedoc(app: INestApplication, spec: OpenAPIObject): Promise<INestApplication> {
  const redocOptions: RedocOptions = {
    title: 'Hello Nest',
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
  };

  await RedocModule.setup('/docs', app, spec, redocOptions);
  return app;
}
