import { Model, Column, Table, HasOne, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import { User } from './user.entity';

@Table
export class Photo extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @ForeignKey(() => User)
  userId: number
  
  @HasOne(() => User)
  user: User;



}