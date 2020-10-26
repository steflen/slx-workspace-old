/**
 * Same as Partial<T> but goes deeper and makes Partial<T> all its properties and sub-properties.
 */
import { IPagination } from '@slx/api-user/interfaces/pagination.interface';

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
  update(id: any, entity: QueryDeepPartialEntity<T>, ...options: any[]): Promise<T>;
  findAll(): Promise<IPagination<T>>;
  findOne(id: string | number): Promise<T>;
  delete(id: any): Promise<void>;
}
