import { ApiProperty } from '@nestjs/swagger';
import { Profile } from '../models/profile.model';

export class ProfileDto {
  @ApiProperty()
  readonly id: string;

  // @ApiProperty()
  // readonly userId: string;

  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty()
  readonly aboutMe: string;

  @ApiProperty()
  readonly birthday: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(profile: Profile) {
    this.id = profile.id;
    // this.userId = profile.userId;
    this.firstName = profile.firstName;
    this.lastName = profile.lastName;
    this.aboutMe = profile.aboutMe;
    this.birthday = profile.birthday;
    this.createdAt = profile.createdAt;
    this.updatedAt = profile.updatedAt;
  }
}
