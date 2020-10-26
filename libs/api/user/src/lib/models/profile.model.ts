import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'profile',
})
export class Profile extends Model<Profile> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ field: 'first_name' })
  firstName: string;

  @Column({ field: 'last_name' })
  lastName: string;

  @Column(DataType.DATEONLY)
  birthday: string;

  @AllowNull
  @Column
  mobilePhone?: string;

  @Column({ field: 'about_me' })
  aboutMe: string;

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
  // user: User;
}