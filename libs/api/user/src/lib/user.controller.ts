import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly logger: Logger) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    this.logger.log('create user', JSON.stringify(createUserDto.toJson()));
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    this.logger.log('find all users');
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    this.logger.log('find one users', id);
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    this.logger.log('delete one users', id);
    return this.userService.remove(id);
  }
}
