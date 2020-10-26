import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '@slx/api-user/providers/user.providers';
import { CrudService } from '@slx/api-user/services/crud.service';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Repository, Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';

@Injectable()
export class UserService extends CrudService<User> {
  constructor(
    @Inject('SEQUELIZE') protected readonly sequelize: Sequelize,
    @Inject(USER_REPOSITORY) private readonly usersRepository: Repository<User>,
    @InjectPinoLogger(UserService.name) protected readonly log: PinoLogger,
  ) {
    super(sequelize, usersRepository, log);
  }
}
