import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export default registerAs(
  'jsonwebtoken',
  () =>
    ({
      secretOrPrivateKey: process.env.JWT_SECRET_KEY, //'JWT_SECRET_KEY',
      signOptions: {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      },
    } as JwtModuleOptions),
);
