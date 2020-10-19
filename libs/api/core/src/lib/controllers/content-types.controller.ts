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
import { InContentTypeDto } from '../dto/in-content-type.dto';
// noinspection ES6PreferShortImport
import { OutContentTypeDto } from '../dto/out-content-type.dto';
// noinspection ES6PreferShortImport
import { OutContentTypesDto } from '../dto/out-content-types.dto';
// noinspection ES6PreferShortImport
import { ContentType } from '../entities/content-type.entity';
// noinspection ES6PreferShortImport
import { ICoreConfig } from '../interfaces/core-config.interface';
// noinspection ES6PreferShortImport
import { ParseIntWithDefaultPipe } from '../pipes/parse-int-with-default.pipe';
// noinspection ES6PreferShortImport
import { ContentTypesService } from '../services/content-types.service';

@ApiTags('content-types')
@ApiBearerAuth()
@Controller('/api/content_types')
export class ContentTypesController {
  constructor(
    @Inject(CORE_CONFIG_TOKEN) private readonly coreConfig: ICoreConfig,
    private readonly service: ContentTypesService,
  ) {}

  @Roles('isSuperuser')
  @Permissions('add_content-type')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: OutContentTypeDto,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Post()
  async create(@Body() dto: InContentTypeDto) {
    return plainToClass(
      OutContentTypeDto,
      await this.service.create({
        item: plainToClass(ContentType, dto),
      }),
    );
  }

  @Roles('isSuperuser')
  @Permissions('change_content-type')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutContentTypeDto,
    description: 'The record has been successfully updated.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiParam({ name: 'id', type: Number })
  @Put(':id')
  async update(@Param('id', new ParseIntPipe()) id, @Body() dto: InContentTypeDto) {
    if (this.coreConfig.demo) {
      throw new MethodNotAllowedException('Not allowed in DEMO mode');
    }
    return plainToClass(
      OutContentTypeDto,
      await this.service.update({
        id,
        item: plainToClass(ContentType, dto),
      }),
    );
  }

  @Roles('isSuperuser')
  @Permissions('delete_content-type')
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
      OutContentTypeDto,
      await this.service.delete({
        id,
      }),
    );
  }

  @Roles('isSuperuser')
  @Permissions('read_content-type')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutContentTypeDto,
    description: '',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Get(':id')
  async findById(@Param('id', new ParseIntPipe()) id) {
    return plainToClass(
      OutContentTypeDto,
      await this.service.findById({
        id,
      }),
    );
  }

  @Roles('isSuperuser')
  @Permissions('read_content-type')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: OutContentTypesDto,
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
  @Get()
  async findAll(
    @Query('cur_page', new ParseIntWithDefaultPipe(1)) curPage,
    @Query('per_page', new ParseIntWithDefaultPipe(10)) perPage,
    @Query('q') q,
    @Query('sort') sort,
  ) {
    return plainToClass(
      OutContentTypesDto,
      await this.service.findAll({
        curPage,
        perPage,
        q,
        sort,
      }),
    );
  }
}
