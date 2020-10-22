import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly sequelize: Sequelize,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return user.save();
  }

  async findAll(): Promise<User[]> {
    try {
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

  findOne(username: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }

  async remove(username: string): Promise<void> {
    const user = await this.findOne(username);
    await user.destroy();
  }
}
