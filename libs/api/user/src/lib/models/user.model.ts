// import { Post } from '@slx/api-post/models/post.model';
import { IUser } from '@slx/api-user/interfaces/user.interface';
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  IsEmail,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

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

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  // @HasOne(() => Profile)
  // profile: Profile;
  //
  // @HasMany(() => Post)
  // posts: Post[];
}
