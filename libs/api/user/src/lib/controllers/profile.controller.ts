// @UseGuards(AuthGuard("jwt"))
// @ApiBearerAuth()
import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CrudController } from '@slx/api-database/crud/crud.controller';
import { CurrentUser } from '@slx/api-user/decorators/current-user.decorator';
import { User } from '@slx/api-user/models/user.model';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController extends CrudController<Profile> {
  constructor(private readonly profileService: ProfileService) {
    super(profileService);
  }

  @ApiOperation({ summary: 'Create a new profile' })
  @Post()
  async create(@Body() profile: CreateProfileDto, @CurrentUser() user: User): Promise<Profile> {
    return super.create(profile, user);
    // return this.profileService.create(entity, file, user);
  }

  @ApiOperation({ summary: 'Update an existing user' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() entity: UpdateProfileDto): Promise<Profile> {
    return super.update(id, entity);
  }

  // @ApiOperation({ summary: 'Returns currently logged in user data.' })
  // @Get('me')
  // getCurrentUserData(@Request() req: ApiRequest) {
  //   return req.user;
  // }
}
