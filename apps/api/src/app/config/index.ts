import corsConfig from './cors.config';
import loggerConfig from './logger.config';
import mainConfig from './main.config';
import rateLimitConfig from './rate-limit.config';
import sequelizeConfig from './sequelize.config';
export { corsConfig, rateLimitConfig, loggerConfig, sequelizeConfig, mainConfig };

export default [corsConfig, rateLimitConfig, loggerConfig, sequelizeConfig, mainConfig];
