import app from './app.config';
import cors from './cors.config';
import http from './http.config';
import i18n from './i18n.config';
import jwt from './jwt.config';
import logger from './logger.config';
import ratelimit from './ratelimit.config';
import swagger from './swagger.config';

export { app, swagger,  i18n, cors, logger, ratelimit, http, jwt };

export default [app, swagger,  i18n, cors, logger, ratelimit, http, jwt];
