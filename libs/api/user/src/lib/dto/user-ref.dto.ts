import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserRefDto {
  @ApiProperty()
  @IsString()
  readonly username: string;
}
