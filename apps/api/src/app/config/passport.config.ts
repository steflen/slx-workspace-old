import { registerAs } from '@nestjs/config';
import { AuthModuleAsyncOptions } from '@nestjs/passport';

export default registerAs(
  'passport',
  () =>
    ({
      defaultStrategy: 'jwt',
    } as AuthModuleAsyncOptions),
);
