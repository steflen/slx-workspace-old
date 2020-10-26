import { DATABASE_TOKEN } from '@slx/api-database/providers/database.providers';
import { Logger } from 'nestjs-pino';
import { Sequelize } from 'sequelize-typescript';
import { Profile } from '../models/profile.model';

export const PROFILE_REPO_TOKEN = 'PROFILE_REPOSITORY';
export const profileModelProviders = [
  {
    provide: PROFILE_REPO_TOKEN,
    inject: [Logger, DATABASE_TOKEN],
    useFactory: (logger: Logger, sequelize: Sequelize) => {
      try {
        return sequelize.getRepository(Profile);
      } catch (err) {
        logger.warn('Error while initialization of user repository');
        logger.warn(err);
      }
    },
  },
];
