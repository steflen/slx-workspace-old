export interface ICoreConfig {
  demo: boolean;
  port?: number;
  externalPort?: number;
  domain?: string;
  protocol?: 'http' | 'https';
  indexFile?: string;
}

export const CORE_DEFAULT_CONFIG: ICoreConfig = {
  demo: false,
  port: 5000,
  protocol: 'http',
  domain: 'localhost',
};

export const CORE_CONFIG_TOKEN = 'CoreConfigToken';

export const coreProviders = [
  {
    provide: CORE_CONFIG_TOKEN,
    useValue: {
      ...CORE_DEFAULT_CONFIG,
      demo: process.env.DEMO === 'true',
      port: process.env.PORT ? +process.env.PORT : 5000,
      protocol: process.env.PROTOCOL === 'https' ? 'https' : 'http',
      externalPort: process.env.EXTERNAL_PORT ? +process.env.EXTERNAL_PORT : undefined,
      domain: process.env.DOMAIN || '',
    },
    inject: ['DATABASE_CONNECTION'],
  },
  ...CORE_APP_FILTERS,
  ...CORE_APP_PIPES,
];
