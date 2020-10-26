import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '@slx/api-user/decorators/current-user.decorator';
import { User } from '@slx/api-user/models/user.model';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { ProfileDto } from '../dto/profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiOkResponse({ type: [ProfileDto] })
  findAll(): Promise<ProfileDto[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProfileDto })
  @ApiParam({ name: 'id', required: true })
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<ProfileDto> {
    return this.profileService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: Profile })
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  create(@Body() profile: CreateProfileDto, @CurrentUser() user: User): Promise<void> {
    return this.profileService.create(profile, user);
  }

  @Put(':id')
  @ApiOkResponse({ type: Profile })
  @ApiParam({ name: 'id', required: true })
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Req() request,
    @Body() updatePostDto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profileService.update(id, request.user.id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Profile })
  @ApiParam({ name: 'id', required: true })
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number, @Req() request): Promise<Profile> {
    return this.profileService.delete(id, request.user.id);
  }
}
