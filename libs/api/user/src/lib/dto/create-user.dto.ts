import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@slx/api-user/dto/user-role.enum';
import { UserStatus } from '@slx/api-user/dto/user-status.enum';
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

  @ApiProperty({ description: 'Status of user authentication', default: 'PENDING' })
  @IsNotEmpty()
  readonly status: UserStatus;

  @ApiProperty({ description: 'User role', default: 'PENDING' })
  @IsNotEmpty()
  readonly role: UserRole;
}
