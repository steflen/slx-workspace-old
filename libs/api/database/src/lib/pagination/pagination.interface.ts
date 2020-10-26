import { Model } from 'sequelize-typescript';

export interface IPagination<T> {
  rows: Model<any, any>[];
  count: number;
}
