import { registerAs } from '@nestjs/config';

export default registerAs('http', () => ({
  protocol: process.env.PROTOCOL === 'https' ? 'https' : 'http',
  port: parseInt(process.env.PORT || '') || 8888,
  hostname: process.env.HOST || '127.0.0.1',
}));
