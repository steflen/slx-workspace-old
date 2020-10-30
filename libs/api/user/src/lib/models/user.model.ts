// import { Post } from '@slx/api-post/models/post.model';
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
import { UserRole } from '../dto/user-role.enum';
import { UserStatus } from '../dto/user-status.enum';
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
    type: DataType.ENUM('GUEST', 'USER', 'ADMIN'),
    defaultValue: 'GUEST',
  })
  role: UserRole;

  @Column({
    type: DataType.ENUM('PENDING', 'CONFIRMED'),
    defaultValue: 'PENDING',
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
