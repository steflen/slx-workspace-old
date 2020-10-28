import { User } from '@slx/api-user/models/user.model';
import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
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

  @AllowNull
  @Column({ field: 'first_name' })
  firstName: string;

  @AllowNull
  @Column({ field: 'last_name' })
  lastName: string;

  @AllowNull
  @Column({ field: 'birthday', type: DataType.DATEONLY })
  birthday: string;

  @AllowNull
  @Column({ field: 'mobile_phone' })
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
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    field: 'user_id',
  })
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
