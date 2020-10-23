import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from '@slx/api-user';
import { PinoLogger } from 'nestjs-pino';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly logger: PinoLogger) {
    logger.setContext(UserController.name);
  }

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

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    this.logger.info('Find one user %o', id);
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    this.logger.info('Delete one user %o', id);
    return this.userService.remove(id);
  }
}
