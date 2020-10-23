import { ApiProperty } from '@nestjs/swagger';
import { User } from '../models/user.model';

export class UserDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
  }
}
