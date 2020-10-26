import { Transform } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

export interface IPagination<T> {
  readonly items: T[];
  readonly total: number;
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
  readonly take? = 10;

  @IsOptional()
  @Min(0)
  @Transform((val: string) => parseInt(val, 10))
  readonly skip? = 0;

  @IsOptional()
  abstract readonly order?: { [P in keyof T]?: OrderType };
}
