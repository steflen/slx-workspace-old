import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { registerAs } from '@nestjs/config';

export interface IAuthConfig {
  providers: () => Provider[];
  passportProviders: () => Provider[];
}

export default registerAs('slx-auth', () => ({}));
