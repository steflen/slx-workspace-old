import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PinoLogger } from 'nestjs-pino';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly sequelize: Sequelize,
    private readonly logger: PinoLogger,
  ) {
    logger.setContext(UserService.name);
  }

  async createDummyUser(): Promise<User[]> {
    try {
      this.logger.info('Creating dummy users');
      await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };

        await this.userModel.create({ firstName: 'Abraham', lastName: 'Lincoln' }, transactionHost);
        await this.userModel.create({ firstName: 'John', lastName: 'Boothe' }, transactionHost);
      });
    } catch (err) {
      // Transaction has been rolled back
      // err is lazy-whatever rejected the promise chain returned to the transaction callback
    }
    return this.userModel.findAll();
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    this.logger.info('Creating user %o', createUserDto);
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return user.save();
  }

  async findAll(): Promise<User[]> {
    this.logger.info('Find all users');
    return this.userModel.findAll();
  }

  findOne(username: string): Promise<User> {
    this.logger.info('Find one user by username %o', username);
    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }

  async remove(username: string): Promise<void> {
    this.logger.info('Remove one user by username %o', username);
    const user = await this.findOne(username);
    await user.destroy();
  }
}
