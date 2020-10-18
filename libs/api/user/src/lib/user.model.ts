import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
