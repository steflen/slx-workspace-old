import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PinoLogger } from 'nestjs-pino';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../models/user.model';

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

        await this.userModel.create({ usernam: 'bob', email: 'bob@abcde.fg' }, transactionHost);
        await this.userModel.create({ username: 'klaus', email: 'klausi@xyz.de' }, transactionHost);
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
    user.username = createUserDto.email;
    user.email = createUserDto.email;

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
