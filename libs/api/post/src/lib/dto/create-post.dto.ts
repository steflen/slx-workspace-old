import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @Length(3, 60)
  readonly title: string;

  @ApiProperty()
  @IsString()
  readonly content: string;
}
