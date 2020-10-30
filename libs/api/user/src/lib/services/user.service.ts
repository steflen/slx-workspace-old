import { Inject, Injectable } from '@nestjs/common';
import { PaginationParams } from '@slx/api-database/pagination/pagination-params';
import { DATABASE_TOKEN } from '@slx/api-database/providers/database.providers';
import { CreateUserDto } from '@slx/api-user/dto/create-user.dto';
import { UpdateUserDto } from '@slx/api-user/dto/update-user.dto';
import { UserDto } from '@slx/api-user/dto/user.dto';
import { plainToClass } from 'class-transformer';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Model, Repository, Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';
import { USER_REPO_TOKEN } from '../providers/user.providers';

@Injectable()
export class UserService /*extends CrudService<User>*/ {
  constructor(
    @Inject(DATABASE_TOKEN) protected readonly sequelize: Sequelize,
    @Inject(USER_REPO_TOKEN) private readonly userRepository: Repository<User>,
    @InjectPinoLogger(UserService.name) protected readonly log: PinoLogger,
  ) {
    // super(sequelize, usersRepository, log);
  }

  public async create(user: CreateUserDto): Promise<UserDto> {
    return this.userRepository
      .create(user)
      .then((user) => user.toJSON())
      .then((userJson) => {
        this.log.info({ user: userJson }, 'Created user');
        // repository returns a more advanced model, using class-transformer to convert to dto
        return plainToClass(UserDto, userJson);
      })
      .catch((error) => {
        this.log.error({ user, error }, 'Failed to create user');
        throw error;
      });
  }

  public async update(id: string, user: UpdateUserDto): Promise<UserDto[] | void> {
    return this.userRepository
      .update(user, { where: { id } })
      .then(([count, updated]) => {
        this.log.info({ count, updated }, 'Updated user(s)');
        return plainToClass(UserDto, updated);
      })
      .catch((error) => {
        this.log.error({ id, user, error }, 'Failed to update user(s)');
      });

    // this.log.warn('Failed to update user');
    // return Promise.reject(err);
  }

  public async findAll(pagination?: PaginationParams<User>): Promise<{ rows: Model<any, any>[]; count: number }> {
    const { rows, count } = await this.userRepository.findAndCountAll(/*pagination paramss....*/);
    this.log.info({ rows, count }, 'Retrieving all users');
    return { rows, count };
  }

  public async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id: id } });
    // if (!record) {
    //   throw new NotFoundException(`The requested record was not found`);
    // }
  }

  public async delete(id: string, ...args: any[]): Promise<number> {
    // try {
    return this.userRepository.destroy({ where: { id: id } });
    // } catch (err) {
    //   throw new NotFoundException(`The record was not found`, err);
    // }
  }
  async findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne<User>({
      where: { username },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne<User>({
      where: { email },
    });
  }
}
