import cors from './cors.config';
import env from './env.config';
import http from './http.config';
import i18n from './i18n.config';
import jwt from './jwt.config';
import logger from './logger.config';
import ratelimit from './ratelimit.config';
import sequelize from './sequelize.config';
import slxauth from './slx-auth.config';
import slxcore from './slx-core.config';
import slxuser from './slx-user.config';

export { sequelize, slxcore, i18n, slxuser, slxauth, cors, env, logger, ratelimit, http, jwt };

export default [sequelize, slxcore, i18n, slxuser, slxauth, cors, env, logger, ratelimit, http, jwt];
