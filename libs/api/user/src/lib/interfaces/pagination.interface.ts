import { Transform } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';
import { Model } from 'sequelize-typescript';

export interface IPagination<T> {
  rows: Model<any, any>[];
  count: number;
}

export enum OrderType {
  DESC = 'DESC',
  ASC = 'ASC',
}

export abstract class PaginationParams<T> {
  @IsOptional()
  @Min(0)
  @Max(50)
  @Transform((val: string) => parseInt(val, 10))
  readonly limit? = 10;

  @IsOptional()
  @Min(0)
  @Transform((val: string) => parseInt(val, 10))
  readonly offset? = 0;

  @IsOptional()
  abstract readonly order?: { [P in keyof T]?: OrderType };
}
