import { registerAs } from '@nestjs/config';

export default registerAs('env', () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  protocol: process.env.PROTOCOL === 'https' ? 'https' : 'http',
  globalPrefix: 'api',
  port: parseInt(process.env.PORT || '') || 4000,
  host: process.env.HOST || '0.0.0.0',
  serverURI: process.env.SERVER_URI || 'http://localhost:4000',
  clientURI: process.env.CLIENT_URI || 'http://localhost:3000',
}));
