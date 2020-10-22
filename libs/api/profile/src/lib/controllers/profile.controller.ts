import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { ProfileDto } from '../dto/profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { Profile as ProfileModel } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
@ApiTags('profile')
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
  @ApiCreatedResponse({ type: ProfileModel })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPostDto: CreateProfileDto, @Req() request): Promise<ProfileModel> {
    return this.profileService.create(request.user.id, createPostDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: ProfileModel })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Req() request,
    @Body() updatePostDto: UpdateProfileDto,
  ): Promise<ProfileModel> {
    return this.profileService.update(id, request.user.id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProfileModel })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number, @Req() request): Promise<ProfileModel> {
    return this.profileService.delete(id, request.user.id);
  }
}
