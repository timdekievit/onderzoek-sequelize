import {
  Model,
  Column,
  Table,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.entity';

@Table
export class Photo extends Model<Photo> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ field: 'name' })
  name: string;

  @Column({ field: 'description' })
  description: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    field: 'user_id',
  })
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
