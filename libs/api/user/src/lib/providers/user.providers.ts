import { DATABASE_TOKEN } from '@slx/api-database/providers/database.providers';
import { Logger } from 'nestjs-pino';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';

export const USER_REPO_TOKEN = 'USER_REPOSITORY';

export const userModelProviders = [
  {
    provide: USER_REPO_TOKEN,
    inject: [Logger, DATABASE_TOKEN],
    useFactory: (logger: Logger, sequelize: Sequelize) => {
      try {
        return sequelize.getRepository(User);
      } catch (err) {
        logger.warn('Error while initialization of user repository');
        logger.warn(err);
      }
    },
  },
];
