import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from '@slx/api-auth';
import { ValidatorService } from '@slx/api-core';
import { FindConditions, SelectQueryBuilder } from 'typeorm';
import { UsersPageOptionsDto } from './dto/users-page-options';
import { UsersPageDto } from './dto/users-page.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class ApiUserService {
  constructor(public readonly userRepository: UserRepository, public readonly validatorService: ValidatorService) {}

  /**
   * Find single user
   */
  findOne(findData: FindConditions<UserEntity>): Promise<UserEntity> {
    return this.userRepository.findOne(findData);
  }

  async findByUsernameOrEmail(options: Partial<{ username: string; email: string }>): Promise<UserEntity | undefined> {
    const queryBuilder = this.userRepository.createQueryBuilder('user');

    if (options.email) {
      queryBuilder.orWhere('user.email = :email', {
        email: options.email,
      });
    }
    if (options.username) {
      queryBuilder.orWhere('user.username = :username', {
        username: options.username,
      });
    }

    return queryBuilder.getOne();
  }

  async createUser(userRegisterDto: UserRegisterDto): Promise<UserEntity> {
    let avatar: string;

    const user = this.userRepository.create({ ...userRegisterDto, avatar });

    return this.userRepository.save(user);
  }

  async getUsers(pageOptionsDto: UsersPageOptionsDto): Promise<UsersPageDto> {
    const queryBuilder: SelectQueryBuilder<UserEntity> = this.userRepository.createQueryBuilder('user');
    const [users, pageMetaDto] = await queryBuilder.paginate(pageOptionsDto);

    return new UsersPageDto(users.toDtos(), pageMetaDto);
  }
}
