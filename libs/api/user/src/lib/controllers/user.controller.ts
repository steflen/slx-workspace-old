import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserDto } from '@slx/api-user/dto/user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserService } from '../services/user.service';

// @UseGuards(AuthGuard("jwt"))
// @ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @Post()
  async create(@Body() user: CreateUserDto): Promise<UserDto> {
    return this.userService.create(user);
  }

  @ApiOperation({ summary: 'Update an existing user' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() user: UpdateUserDto): Promise<UserDto[] | void> {
    return this.userService.update(id, user);
  }

  // @ApiOperation({ summary: 'Returns currently logged in user data.' })
  // @Get('me')
  // getCurrentUserData(@Request() req: ApiRequest) {
  //   return req.user;
  // }
}
