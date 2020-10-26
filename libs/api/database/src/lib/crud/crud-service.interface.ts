import { PaginationParams } from '../pagination/pagination-params';
import { IPagination } from '../pagination/pagination.interface';
import { DeepPartial, QueryDeepPartialEntity } from './query.types';

export interface ICrudService<T> {
  /*
   * ...args: any[] => if another implementation is necesarry there may be multiple args
   * */
  create(entity: DeepPartial<T>, ...args: any[]): Promise<T>;
  findAll(filter?: PaginationParams<T>): Promise<IPagination<T>>;
  findOne(id: string): Promise<T>;
  update(id: any, entity: QueryDeepPartialEntity<T>, ...args: any[]): Promise<T>;
  delete(id: string, ...args: any[]): Promise<number>;
}
