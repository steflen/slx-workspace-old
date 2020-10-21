import { registerAs } from '@nestjs/config';

// export interface IAuthConfig {
//   services: () => Provider[];
//   passportProviders: () => Provider[];
// }

export default registerAs('slxuser', () => ({}));
