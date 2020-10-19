import auth from './auth.config';
import cors from './cors.config';
import env from './env.config';
import http from './http.config';
import logger from './logger.config';
import passport from './passport.config';
import project from './project.config';
import ratelimit from './ratelimit.config';
import typeorm from './typeorm.config';

export { cors, env, logger, ratelimit, typeorm, auth, http, project, passport };
export default [cors, env, logger, ratelimit, typeorm, auth, http, project, passport];
