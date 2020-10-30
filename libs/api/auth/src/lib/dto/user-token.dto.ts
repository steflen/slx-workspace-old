import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '@slx/api-user/dto/user.dto';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { AccessTokenDto } from './access-token.dto';

export class UserTokenDto {
  @IsNotEmpty({ message: 'Access token required to generate response' })
  @Type(() => AccessTokenDto)
  @ApiProperty({ type: AccessTokenDto })
  accessToken: AccessTokenDto;

  @IsNotEmpty({ message: 'User data required to generate response' })
  @Type(() => UserDto)
  @ApiProperty({ type: UserDto })
  user: UserDto;
}
