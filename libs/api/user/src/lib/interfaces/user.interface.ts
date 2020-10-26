export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  //  profile?: Profile;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date;
}
