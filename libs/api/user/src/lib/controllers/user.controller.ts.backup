import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

// @UseGuards(AuthGuard("jwt"))
// @ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all the users' })
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':username')
  findByUsername(@Param('username') username: string): Promise<User> {
    return this.userService.findByUsername(username);
  }

  @Get(':email')
  findByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.findByEmail(email);
  }

  @Delete(':username')
  remove(@Param('username') username: string): Promise<void> {
    return this.userService.removeByUsername(username);
  }

  // @ApiOperation({ summary: 'Returns currently logged in user data.' })
  // @Get('me')
  // getCurrentUserData(@Request() req: ApiRequest) {
  //   return req.user;
  // }
}
