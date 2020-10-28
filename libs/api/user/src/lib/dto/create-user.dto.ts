import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Unique email address of the user', minLength: 8, maxLength: 50 })
  @IsEmail()
  @Length(8, 254)
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ description: 'Unique username' })
  @IsString()
  @Length(3, 50)
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ description: 'Password with at least 10 character', minLength: 10 })
  @IsString()
  @MinLength(10)
  @IsNotEmpty()
  readonly password: string;

  readonly status;

  readonly role;
}
