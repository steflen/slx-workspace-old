import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

// https://trilon.io/blog/introducing-mapped-types-for-nestjs
export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['username', 'email'] as const)) {}

//
// @ApiProperty()
// @IsOptional()
// @IsString()
// @MinLength(6)
// readonly password?: string;
