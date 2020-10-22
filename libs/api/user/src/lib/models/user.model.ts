import { Column, CreatedAt, DataType, DeletedAt, IsEmail, Model, Table, Unique, UpdatedAt } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
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

  // @HasOne(() => Profile)
  // profile: Profile;

  //
  // @HasMany(() => Post)
  // posts: Post[];
}
