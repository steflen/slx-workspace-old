import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateProfileDto } from '@slx/api-user/dto/create-profile.dto';

// https://trilon.io/blog/introducing-mapped-types-for-nestjs

export class UpdateProfileDto extends PartialType(
  OmitType(
    CreateProfileDto,
    // everything from profile creation is updatable
    [] as const,
  ),
) {}
