import { Inject, Injectable } from '@nestjs/common';
import { CrudService } from '@slx/api-database/crud/crud.service';
import { DATABASE_TOKEN } from '@slx/api-database/providers/database.providers';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Repository, Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';
import { USER_REPO_TOKEN } from '../providers/user.providers';

@Injectable()
export class UserService extends CrudService<User> {
  constructor(
    @Inject(DATABASE_TOKEN) protected readonly sequelize: Sequelize,
    @Inject(USER_REPO_TOKEN) private readonly usersRepository: Repository<User>,
    @InjectPinoLogger(UserService.name) protected readonly log: PinoLogger,
  ) {
    super(sequelize, usersRepository, log);
  }

  async findByUsername(username: string) {
    return await this.usersRepository.findOne<User>({
      where: { username },
    });
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne<User>({
      where: { email },
    });
  }
}
