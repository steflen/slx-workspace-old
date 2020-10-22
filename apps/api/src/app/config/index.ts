import app from './app.config';
import cors from './cors.config';
import http from './http.config';
import i18n from './i18n.config';
import jwt from './jwt.config';
import logger from './logger.config';
import ratelimit from './ratelimit.config';
import sequelize from './sequelize.config';
import swagger from './swagger.config';

export { app, swagger, sequelize, i18n, cors, logger, ratelimit, http, jwt };

export default [app, swagger, sequelize, i18n, cors, logger, ratelimit, http, jwt];
