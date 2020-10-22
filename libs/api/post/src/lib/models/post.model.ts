import {
  AutoIncrement,
  Column,
  CreatedAt,
  DeletedAt,
  Length,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class Post extends Model<Post> {
  @PrimaryKey
  @AutoIncrement
  @Column /*(DataType.BIGINT)*/
  id: number;

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

  // @ForeignKey(() => User)
  // @Column({
  //   type: DataType.UUID,
  //   field: 'user_id',
  // })
  // userId: string;
  //
  // @BelongsTo(() => User, 'id')
  // author: User;

  // @ForeignKey(() => User)
  // @Column
  // authorId: number;
  //
  // @BelongsTo(() => User)
  // author: User;
}
