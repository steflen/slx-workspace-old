import { registerAs } from '@nestjs/config';

export interface SwaggerStartParams {
  title: string;
  description: string;
  version: string;
  path: string;
}
export default registerAs(
  'swagger',
  () =>
    ({
      title: '@slx workspace api',
      description: 'super duper octo api',
      path: 'swagger',
      version: '0.1',
    } as SwaggerStartParams),
);
