import { Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Group } from './group.entity';
import { Photo } from './photo.entity';

@Table
export class User extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  firstName: string;

  @Column
  prefix: string

  @Column
  lastName: string;

  @Column
  isActive: boolean;

  @ForeignKey(() => Photo)
  photoIds: number[];

  // @HasMany(() => Photo)
  // photos: Photo[];

  @ForeignKey(() => Group)
  groupIds: number[];

  // @HasMany(() => Group)
  // groups: Group[];
}