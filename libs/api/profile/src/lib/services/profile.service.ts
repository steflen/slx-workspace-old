import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
// import { User } from '../../../../user/src/lib/models/user.model';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { ProfileDto } from '../dto/profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { Profile } from '../models/profile.model';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('ProfileRepository')
    private readonly profileRepository: typeof Profile,
  ) {}

  async findAll() {
    const profile = await this.profileRepository.findAll<Profile>(/*{
      include: [User],
    }*/);
    return profile.map((profile) => new ProfileDto(profile));
  }

  async findOne(id: number) {
    const profile = await this.profileRepository.findByPk<Profile>(id /*, {
      include: [User],
    }*/);
    if (!profile) {
      throw new HttpException('No profile found', HttpStatus.NOT_FOUND);
    }
    return new ProfileDto(profile);
  }

  async create(userId: string, createProfileDto: CreateProfileDto) {
    const profile = new Profile();
    // profile.userId = userId;
    profile.firstName = createProfileDto.firstName;
    profile.lastName = createProfileDto.lastName;
    profile.birthday = createProfileDto.birthday;
    profile.aboutMe = createProfileDto.aboutMe;
    return profile.save();
  }

  private async getUserProfile(id: number, userId: string) {
    const profile = await this.profileRepository.findByPk<Profile>(id);
    if (!profile) {
      throw new HttpException('No profile found', HttpStatus.NOT_FOUND);
    }
    // if (profile.userId !== userId) {
    //   throw new HttpException('You are unauthorized to manage this profile', HttpStatus.UNAUTHORIZED);
    // }

    return profile;
  }

  async update(id: number, userId: string, updateProfileDto: UpdateProfileDto) {
    const profile = await this.getUserProfile(id, userId);
    profile.firstName = updateProfileDto.firstName || profile.firstName;
    profile.lastName = updateProfileDto.lastName || profile.lastName;
    profile.birthday = updateProfileDto.birthday || profile.birthday;
    profile.aboutMe = updateProfileDto.aboutMe || profile.aboutMe;
    return profile.save();
  }

  async delete(id: number, userId: string) {
    const profile = await this.getUserProfile(id, userId);
    await profile.destroy();
    return profile;
  }
}
