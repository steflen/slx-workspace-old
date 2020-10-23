import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly sequelize: Sequelize,
    @InjectPinoLogger(UserService.name) private readonly log: PinoLogger,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };
        this.log.info('Try to create user %o', createUserDto);

        await this.userModel.create(
          { username: createUserDto.username, email: createUserDto.email, password: createUserDto.password },
          transactionHost,
        );
      });
    } catch (err) {
      console.log(err);
      // Transaction has been rolled back
      // err is lazy-whatever rejected the promise chain returned to the transaction callback
      if (err) {
        this.log.warn(err.message);
      }
    }
  }

  async findAll(): Promise<User[]> {
    this.log.info('Find all users');
    return this.userModel.findAll();
  }

  async findByUsername(username: string): Promise<User> {
    this.log.info('Find User By Username %o', username);
    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    this.log.info('Find User By Email %o', email);
    return this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  async removeByUsername(username: string): Promise<void> {
    this.log.info('Remove User By Username %o', username);
    const user = await this.findByUsername(username);
    await user.destroy();
  }
}
