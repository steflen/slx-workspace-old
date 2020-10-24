import { Logger } from 'nestjs-pino';
import { Sequelize } from 'sequelize-typescript';
import { Profile } from '../models/profile.model';

export const PROFILE_REPOSITORY = 'PROFILE_REPOSITORY';
export const profileModelProviders = [
  {
    provide: PROFILE_REPOSITORY,
    inject: [Logger, 'SEQUELIZE'],
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
