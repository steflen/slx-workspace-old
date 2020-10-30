import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export default registerAs('jwt', () => {
  console.log('SECTRET', process.env.JWT_SECRET);
  console.log('EXPIRESIN', process.env.JWT_EXPIRES_IN);
  return {
    secret: process.env.JWT_SECRET, //'JWT_SECRET_KEY',
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  } as JwtModuleOptions;
});
