import { Post } from '@slx/api-post/models/post.model';
import { Profile } from '@slx/api-profile/models/profile.model';
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  HasOne,
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
export class User extends Model<User> {
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

  @Unique
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

  @HasOne(() => Profile)
  profile: Profile;

  @HasMany(() => Post)
  posts: Post[];
}
