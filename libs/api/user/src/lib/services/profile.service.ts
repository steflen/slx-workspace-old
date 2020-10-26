import { Inject, Injectable } from '@nestjs/common';
import { CrudService } from '@slx/api-database/crud/crud.service';
import { DATABASE_TOKEN } from '@slx/api-database/providers/database.providers';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Repository, Sequelize } from 'sequelize-typescript';
import { Profile } from '../models/profile.model';
import { User } from '../models/user.model';
import { PROFILE_REPO_TOKEN } from '../providers/profile.providers';
import { USER_REPO_TOKEN } from '../providers/user.providers';

@Injectable()
export class ProfileService extends CrudService<Profile> {
  constructor(
    @Inject(DATABASE_TOKEN) protected readonly sequelize: Sequelize,
    @Inject(PROFILE_REPO_TOKEN) private readonly profilesRepository: Repository<Profile>,
    @Inject(USER_REPO_TOKEN) private readonly userRepository: Repository<User>,
    @InjectPinoLogger(ProfileService.name) protected readonly log: PinoLogger,
  ) {
    super(sequelize, profilesRepository, log);
  }
}
