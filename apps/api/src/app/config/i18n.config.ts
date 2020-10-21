import { registerAs } from '@nestjs/config';
import { resolve } from 'path';

export default registerAs('i18n', () => ({
  fallbackLanguage: process.env.I18N_FALLBACK_LANGUAGE || 'en',
  parserOptions: {
    path: resolve(process.cwd(), process.env.I18N_ASSET_DIR || '/'),
    watch: process.env.NODE_ENV === 'development',
  },
}));
