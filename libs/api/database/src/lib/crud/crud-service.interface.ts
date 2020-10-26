/**
 * Same as Partial<T> but goes deeper and makes Partial<T> all its properties and sub-properties.
 */
import { IPagination, PaginationParams } from '@slx/api-database/pagination/pagination.interface';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]> | T[P];
};

/**
 * Make all properties in T optional
 */
export type QueryPartialEntity<T> = {
  [P in keyof T]?: T[P] | (() => string);
};

/**
 * Make all properties in T optional. Deep version.
 */
export type QueryDeepPartialEntity<T> = {
  [P in keyof T]?:
    | (T[P] extends Array<infer U>
        ? Array<QueryDeepPartialEntity<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<QueryDeepPartialEntity<U>>
        : QueryDeepPartialEntity<T[P]>)
    | (() => string);
};

export interface ICrudService<T> {
  create(entity: DeepPartial<T>): Promise<T>;
  update(id: any, entity: QueryDeepPartialEntity<T>): Promise<T>;
  findAll(filter?: PaginationParams<T>): Promise<IPagination<T>>;
  findOne(id: string): Promise<T>;
  delete(id: string): Promise<number>;
}
