import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@slx/api-user';
import { PinoLogger } from 'nestjs-pino';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly logger: PinoLogger) {
    logger.setContext(UserController.name);
  }

  @ApiOperation({ description: 'Create a new user by entering data', summary: 'Create a new user' })
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<void> {
    this.logger.info('Create user %o', createUserDto);
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    this.logger.info('Find all users');
    return this.userService.findAll();
  }

  @Get(':username')
  findByUsername(@Param('username') username: string): Promise<User> {
    this.logger.info('Find User %o', username);
    return this.userService.findByUsername(username);
  }

  @Delete(':username')
  remove(@Param('username') username: string): Promise<void> {
    this.logger.info('Delete one user %o', username);
    return this.userService.removeByUsername(username);
  }
}
