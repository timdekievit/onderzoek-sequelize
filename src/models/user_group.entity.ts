import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Group } from './group.entity';
import { User } from './user.entity';

@Table
export class UserGroup extends Model<UserGroup> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    field: 'user_id',
  })
  userId: string;

  @ForeignKey(() => Group)
  @Column({
    type: DataType.UUID,
    field: 'group_id',
  })
  groupId: string;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Group)
  group: Group;
}
