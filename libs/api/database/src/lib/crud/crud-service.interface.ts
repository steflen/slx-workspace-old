import { PaginationParams } from '../pagination/pagination-params';
import { IPagination } from '../pagination/pagination.interface';
import { DeepPartial, QueryDeepPartialEntity } from './query.types';

export interface ICrudService<T> {
  create(entity: DeepPartial<T>): Promise<T>;
  update(id: any, entity: QueryDeepPartialEntity<T>): Promise<T>;
  findAll(filter?: PaginationParams<T>): Promise<IPagination<T>>;
  findOne(id: string): Promise<T>;
  delete(id: string): Promise<number>;
}
