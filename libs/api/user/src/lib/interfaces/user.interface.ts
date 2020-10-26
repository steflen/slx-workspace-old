import { IProfile } from '@slx/api-user/interfaces/profile.interface';

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date;
  readonly profileId?: string;
  profile?: IProfile;
}
