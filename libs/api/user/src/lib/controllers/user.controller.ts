import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CrudController } from '@slx/api-database/crud/crud.controller';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

// @UseGuards(AuthGuard("jwt"))
// @ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController extends CrudController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @ApiOperation({ summary: 'Create a new user' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return super.create(createUserDto);
  }

  @ApiOperation({ summary: 'Update an existing user' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() entity: UpdateUserDto): Promise<User> {
    return super.update(id, entity);
  }

  // @ApiOperation({ summary: 'Returns currently logged in user data.' })
  // @Get('me')
  // getCurrentUserData(@Request() req: ApiRequest) {
  //   return req.user;
  // }
}
