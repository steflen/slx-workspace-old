import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly username?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(6)
  readonly password?: string;

  // @ApiProperty()
  // @IsOptional()
  // @IsISO8601()
  // readonly birthday?: string;
}
