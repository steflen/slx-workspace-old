import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AccessTokenDto {
  @ApiProperty()
  @IsNotEmpty()
  expiresIn: string;

  @ApiProperty()
  @IsNotEmpty()
  accessToken: string;
}
