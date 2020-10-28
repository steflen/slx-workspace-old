import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '@slx/api-user/dto/user.dto';
import { Type } from 'class-transformer';

export class UserTokenDto {
  @ApiProperty()
  token: string;

  @Type(() => UserDto)
  @ApiProperty({ type: UserDto })
  user: UserDto;
}
