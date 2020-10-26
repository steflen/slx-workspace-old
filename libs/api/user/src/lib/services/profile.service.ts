import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { DATABASE_TOKEN } from '@slx/api-database/providers/database.providers';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Sequelize } from 'sequelize-typescript';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { ProfileDto } from '../dto/profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { Profile } from '../models/profile.model';
import { User } from '../models/user.model';
import { PROFILE_REPO_TOKEN } from '../providers/profile.providers';
import { USER_REPO_TOKEN } from '../providers/user.providers';

@Injectable()
export class ProfileService {
  constructor(
    @Inject(DATABASE_TOKEN) private readonly sequelize: Sequelize,
    @Inject(PROFILE_REPO_TOKEN) private readonly profileRepository: typeof Profile,
    @Inject(USER_REPO_TOKEN) private readonly userRepository: typeof Profile,
    @InjectPinoLogger(ProfileService.name) private readonly log: PinoLogger,
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

  async create(profile: CreateProfileDto, user: User): Promise<void> {
    // const profile = new Profile();
    // profile.userId = userId;
    // profile.firstName = profile.firstName;
    // profile.lastName = profile.lastName;
    // profile.birthday = profile.birthday;
    // profile.aboutMe = profile.aboutMe;
    // return profile.save();
    try {
      await this.sequelize.transaction(async (transaction) => {
        this.log.info('Try to create profile %o at user %o', profile, user);
        // https://github.com/RobinBuschmann/sequelize-typescript#how-to-use-associations-with-repository-mode
        // This will change in the future: One will be able to refer the model classes instead of the repositories.
        const foundUser = await this.userRepository.findOne({ where: { username: user.username } });
        const createdProfile = await this.profileRepository.create<Profile>(profile, {
          include: this.userRepository,
          transaction,
        });
        this.log.info('User %s created profile %o', foundUser, profile);
        return createdProfile;
      });
    } catch (err) {
      this.log.warn('Rollback -> Failed to create profile %o for user %o', profile, user);
      if (err) {
        this.log.warn(err);
      }
    }
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
