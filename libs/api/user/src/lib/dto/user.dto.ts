import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@slx/api-user/dto/user-role.enum';
import { UserStatus } from '@slx/api-user/dto/user-status.enum';
import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @ApiProperty({
    example: '8aeb7b89-06d2-48d0-8306-7c6b93583f8d',
  })
  id: string;

  @ApiProperty({
    example: 'heinz1@web.de',
  })
  readonly email: string;

  @ApiProperty({
    example: 'heinz1',
  })
  readonly username: string;

  @ApiProperty({
    example: '123123123123',
  })
  readonly password: string;

  @ApiProperty({ description: 'Status of user authentication', default: 'PENDING', example: 'PENDING' })
  @IsNotEmpty()
  readonly status: UserStatus;

  @ApiProperty({ description: 'User role', default: 'GUEST', example: 'GUEST' })
  @IsNotEmpty()
  readonly role: UserRole;

  @ApiProperty({
    example: '2020-10-30T23:36:32.839Z',
  })
  readonly createdAt: Date;

  @ApiProperty({
    example: '2020-10-30T23:36:32.839Z',
  })
  readonly updatedAt: Date;
}
