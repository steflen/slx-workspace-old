import { User } from '@slx/api-user/models/user.model';
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Length,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class Post extends Model<Post> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Length({
    min: 3,
    max: 60,
    msg: `The length of post title can't be shorter than 3 and longer than 60 `,
  })
  @Column
  title: string;

  @Column
  content: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    field: 'author_id',
  })
  authorId: string;

  @BelongsTo(() => User)
  author: User;
}
