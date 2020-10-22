import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly firstName?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly lastName?: string;

  @ApiProperty()
  @IsOptional()
  @IsISO8601()
  readonly birthday?: string;
}
