import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  globalPrefix: process.env.API_PREFIX || 'api',
}));
