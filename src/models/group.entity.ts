import {
  Model,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
  DataType,
  BelongsTo,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { UserGroup } from './user_group.entity';

@Table
export class Group extends Model<Group> {
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

  @HasMany(() => UserGroup)
  userGroups: UserGroup[];
}
