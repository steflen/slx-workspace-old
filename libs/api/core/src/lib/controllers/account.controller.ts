import { Body, Controller, HttpCode, HttpStatus, Inject, MethodNotAllowedException, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
// noinspection ES6PreferShortImport
import { CORE_CONFIG_TOKEN } from '../configs/core.config';
// noinspection ES6PreferShortImport
import { Permissions } from '../decorators/permissions.decorator';
// noinspection ES6PreferShortImport
import { Roles } from '../decorators/roles.decorator';
// noinspection ES6PreferShortImport
import { InAccountDto } from '../dto/in-account.dto';
// noinspection ES6PreferShortImport
import { OutAccountDto } from '../dto/out-account.dto';
// noinspection ES6PreferShortImport
import { User } from '../entities/user.entity';
// noinspection ES6PreferShortImport
import { ICoreConfig } from '../interfaces/core-config.interface';
// noinspection ES6PreferShortImport
import { AccountService } from '../services/account.service';

@ApiTags('account')
@Controller('/api/account')
export class AccountController {
  constructor(
    @Inject(CORE_CONFIG_TOKEN) private readonly coreConfig: ICoreConfig,
    private accountService: AccountService,
  ) {}

  @ApiBearerAuth()
  @Roles('isActive')
  @Permissions('change_profile')
  @HttpCode(HttpStatus.OK)
  @Post('/update')
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutAccountDto,
    description: '',
  })
  async update(@Req() req, @Body() accountDto: InAccountDto) {
    if (this.coreConfig.demo) {
      throw new MethodNotAllowedException('Not allowed in DEMO mode');
    }
    return plainToClass(
      OutAccountDto,
      await this.accountService.update({
        id: req.user && req.user.id,
        user: plainToClass(User, accountDto),
      }),
    );
  }
}
