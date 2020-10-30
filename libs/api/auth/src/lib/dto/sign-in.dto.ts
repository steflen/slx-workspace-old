import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'Username cannot be empty' })
  @MaxLength(150)
  @ApiProperty()
  username: string;

  @IsNotEmpty({ message: 'Password cannot be empty' })
  @MaxLength(128)
  @ApiProperty()
  password: string;
}
