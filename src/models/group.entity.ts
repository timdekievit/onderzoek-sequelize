import { Model, Table, Column, HasMany, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import { User } from './user.entity';

@Table
export class Group extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(() => User)
  usersIds: number[];
  
  @HasMany(() => User)
  users: User[]

}