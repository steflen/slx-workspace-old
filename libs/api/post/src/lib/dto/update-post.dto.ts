import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  @Length(3, 60)
  readonly title: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  readonly content: string;
}
