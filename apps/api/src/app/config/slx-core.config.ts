import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { registerAs } from '@nestjs/config';

export interface ICoreConfig {
  providers: () => Provider[];
}

export default registerAs('slx-core', () => ({}));
