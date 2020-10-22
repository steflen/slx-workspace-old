'use strict';

import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiUserService, UserEntity, UsersPageDto } from '@slx/api-user';
import { I18nService } from 'nestjs-i18n';
import { AuthUser } from '../../../auth/src/lib/decorators/auth-user.decorator';
import { Roles } from '../../../auth/src/lib/decorators/roles.decorator';
import { JwtAuthGuard } from '../../../auth/src/lib/guards/jwt-auth.guard';
import { RolesGuard } from '../../../auth/src/lib/guards/roles.guard';
import { AuthUserInterceptor } from '../../../auth/src/lib/interceptors/auth-user.interceptor.service';
import { UsersPageOptionsDto } from './dto/users-page-options';

@Controller('users')
@ApiTags('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@UseInterceptors(AuthUserInterceptor)
@ApiBearerAuth()
export class UserController {
  constructor(private userService: ApiUserService, private readonly i18n: I18nService) {}

  @Get('admin')
  @Roles('user')
  @HttpCode(HttpStatus.OK)
  async admin(@AuthUser() user: UserEntity): Promise<string> {
    const translation = await this.i18n.translate('translations.keywords.admin', {
      lang: 'en',
    });
    return `${translation} ${user.firstName}`;
  }

  @Get('users')
  @Roles('admin')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
    type: UsersPageDto,
  })
  getUsers(
    @Query(new ValidationPipe({ transform: true }))
    pageOptionsDto: UsersPageOptionsDto,
  ): Promise<UsersPageDto> {
    return this.userService.getUsers(pageOptionsDto);
  }
}
