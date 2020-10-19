import { DEFAULT_JWT_CONFIG, JWT_CONFIG_TOKEN } from './jwt.config';

export const AUTH_CONFIGS = [
  {
    provide: JWT_CONFIG_TOKEN,
    useValue: DEFAULT_JWT_CONFIG,
  },
];
