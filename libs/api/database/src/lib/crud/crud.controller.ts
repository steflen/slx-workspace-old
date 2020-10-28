import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PaginationParams } from '../pagination/pagination-params';
import { IPagination } from '../pagination/pagination.interface';
import { ICrudService } from './crud-service.interface';
import { DeepPartial, QueryDeepPartialEntity } from './query.types';

export abstract class CrudController<T> {
  protected constructor(private readonly crudService: ICrudService<T>) {}

  @ApiOperation({ summary: 'Create new record' })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() entity: DeepPartial<T>, ...args: any[]): Promise<T> {
    return this.crudService.create(entity);
  }

  @ApiOperation({ summary: 'Update an existing record' })
  @HttpCode(HttpStatus.ACCEPTED)
  @Put(':id')
  async update(@Param('id') id: string, @Body() entity: QueryDeepPartialEntity<T>, ...args: any[]): Promise<T> {
    return this.crudService.update(id, entity);
  }

  @ApiOperation({ summary: 'Find all with optional paginate' })
  @Get()
  async findAll(filter?: PaginationParams<T>): Promise<IPagination<T>> {
    return this.crudService.findAll(filter);
  }

  @ApiOperation({ summary: 'Find by id' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<T> {
    return this.crudService.findOne(id);
  }

  @ApiOperation({ summary: 'Find by id' })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<T> {
    return this.crudService.findOne(id);
  }

  @ApiOperation({ summary: 'Delete by id' })
  @HttpCode(HttpStatus.ACCEPTED)
  @Delete(':id')
  async delete(@Param('id') id: string, ...args: any[]): Promise<number> {
    return this.crudService.delete(id);
  }
}
