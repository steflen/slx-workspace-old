import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AccessTokenDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Expiration time required' })
  expiresIn: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Access token required' })
  accessToken: string;
}
