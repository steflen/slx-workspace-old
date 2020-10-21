import { registerAs } from '@nestjs/config';

// export interface ICoreConfig {
//   services: () => Provider[];
// }

export default registerAs('slxcore', () => ({}));
