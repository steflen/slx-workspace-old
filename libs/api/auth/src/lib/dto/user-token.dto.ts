import { ApiProperty } from '@nestjs/swagger';
import { AccountDto } from '@slx/api-core';
import { Type } from 'class-transformer';

export class UserTokenDto {
  @ApiProperty()
  token: string;

  @Type(() => AccountDto)
  @ApiProperty({ type: AccountDto })
  user: AccountDto;
}
