import {
  Table,
  Column,
  Model,
  HasMany,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
} from 'sequelize-typescript';

import Event from './event';

@Table({ tableName: 'user' })
class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @CreatedAt
  date_created: Date;

  @UpdatedAt
  date_modified: Date;

  @DeletedAt
  date_deleted: Date;

  @HasMany(() => Event)
  events: Event[];
}

export default User;
