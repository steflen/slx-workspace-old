import { Logger } from 'nestjs-pino';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export const userModelProviders = [
  {
    provide: USER_REPOSITORY,
    inject: [Logger, 'SEQUELIZE'],
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
