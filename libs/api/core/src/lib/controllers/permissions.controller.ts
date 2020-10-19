import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  MethodNotAllowedException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
// noinspection ES6PreferShortImport
import { CORE_CONFIG_TOKEN } from '../configs/core.config';
// noinspection ES6PreferShortImport
import { Permissions } from '../decorators/permissions.decorator';
// noinspection ES6PreferShortImport
import { Roles } from '../decorators/roles.decorator';
// noinspection ES6PreferShortImport
import { InPermissionDto } from '../dto/in-permission.dto';
// noinspection ES6PreferShortImport
import { OutPermissionDto } from '../dto/out-permission.dto';
// noinspection ES6PreferShortImport
import { OutPermissionsDto } from '../dto/out-permissions.dto';
// noinspection ES6PreferShortImport
import { Permission } from '../entities/permission.entity';
// noinspection ES6PreferShortImport
import { ICoreConfig } from '../interfaces/core-config.interface';
// noinspection ES6PreferShortImport
import { ParseIntWithDefaultPipe } from '../pipes/parse-int-with-default.pipe';
// noinspection ES6PreferShortImport
import { PermissionsService } from '../services/permissions.service';

@ApiTags('permissions')
@ApiBearerAuth()
@Controller('/api/permissions')
export class PermissionsController {
  constructor(
    @Inject(CORE_CONFIG_TOKEN) private readonly coreConfig: ICoreConfig,
    private readonly service: PermissionsService,
  ) {}

  @Roles('isSuperuser')
  @Permissions('add_permission')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: OutPermissionDto,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Post()
  async create(@Body() dto: InPermissionDto) {
    return plainToClass(
      OutPermissionDto,
      await this.service.create({
        item: plainToClass(Permission, dto),
      }),
    );
  }

  @Roles('isSuperuser')
  @Permissions('change_permission')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutPermissionDto,
    description: 'The record has been successfully updated.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiParam({ name: 'id', type: Number })
  @Put(':id')
  async update(@Param('id', new ParseIntPipe()) id, @Body() dto: InPermissionDto) {
    if (this.coreConfig.demo) {
      throw new MethodNotAllowedException('Not allowed in DEMO mode');
    }
    return plainToClass(
      OutPermissionDto,
      await this.service.update({
        id,
        item: plainToClass(Permission, dto),
      }),
    );
  }

  @Roles('isSuperuser')
  @Permissions('delete_permission')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The record has been successfully deleted.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe()) id) {
    if (this.coreConfig.demo) {
      throw new MethodNotAllowedException('Not allowed in DEMO mode');
    }
    return plainToClass(
      OutPermissionDto,
      await this.service.delete({
        id,
      }),
    );
  }

  @Roles('isSuperuser')
  @Permissions('read_permission')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutPermissionDto,
    description: '',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  async findById(@Param('id', new ParseIntPipe()) id) {
    return plainToClass(
      OutPermissionDto,
      await this.service.findById({
        id,
      }),
    );
  }

  @Roles('isSuperuser')
  @Permissions('read_permission')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutPermissionsDto,
    description: '',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiQuery({
    name: 'q',
    required: false,
    type: String,
    description: 'Text for search (default: empty)',
  })
  @ApiQuery({
    name: 'sort',
    required: false,
    type: String,
    description: 'Column name for sort (default: -id)',
  })
  @ApiQuery({
    name: 'per_page',
    required: false,
    type: Number,
    description: 'Number of results to return per page. (default: 10)',
  })
  @ApiQuery({
    name: 'cur_page',
    required: false,
    type: Number,
    description: 'A page number within the paginated result set. (default: 1)',
  })
  @ApiQuery({
    name: 'group',
    required: false,
    type: Number,
    description: 'Group id for filter data by group. (default: empty)',
  })
  @ApiQuery({
    name: 'content_type',
    required: false,
    type: Number,
    description: 'Content type id for filter data by content type. (default: empty)',
  })
  @Get()
  async findAll(
    @Query('cur_page', new ParseIntWithDefaultPipe(1)) curPage,
    @Query('per_page', new ParseIntWithDefaultPipe(10)) perPage,
    @Query('q') q,
    @Query('group') group,
    @Query('content_type') contentType,
    @Query('sort') sort,
  ) {
    return plainToClass(
      OutPermissionsDto,
      await this.service.findAll({
        curPage,
        perPage,
        q,
        sort,
        group,
        contentType,
      }),
    );
  }
}
