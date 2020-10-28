// import { Post } from '@slx/api-post/models/post.model';
import { UserRole } from '@slx/api-user/dto/user-role.enum';
import { UserStatus } from '@slx/api-user/dto/user-status.enum';
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasOne,
  IsEmail,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
import { IUser } from '../interfaces/user.interface';
import { Profile } from '../models/profile.model';

@Table({
  tableName: 'user',
})
@Table
export class User extends Model<User> implements IUser {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Unique
  @IsEmail
  @Column
  email: string;

  // @Unique
  @Column
  username: string;

  @Column
  password: string;

  @Column({
    type: DataType.ENUM,
    defaultValue: UserRole.USER,
  })
  role: UserRole;

  @Column({
    type: DataType.ENUM,
    defaultValue: UserStatus.PENDING,
  })
  status: UserStatus;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @HasOne(() => Profile)
  profile: Profile;
  //
  // @HasMany(() => Post)
  // posts: Post[];
}
