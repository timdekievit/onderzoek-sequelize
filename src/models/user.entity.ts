import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Group } from './group.entity';
import { Photo } from './photo.entity';
import { UserGroup } from './user_group.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({ field: 'first_name' })
  firstName: string;

  @Column
  prefix: string;

  @Column({ field: 'last_name' })
  lastName: string;

  @Column
  isActive: boolean;

  // @ForeignKey(() => Photo)
  // photoIds: number[];

  @HasMany(() => Photo)
  photos: Photo[];

  // @BelongsToMany(() => Group, { through: 'User_Group' })
  @HasMany(() => UserGroup)
  userGroups: UserGroup[];
}
