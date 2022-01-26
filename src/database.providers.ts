import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
import { Group } from './models/group.entity';
import { Photo } from './models/photo.entity';
import { User } from './models/user.entity';
import { UserGroup } from './models/user_group.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres' as Dialect,
        host: 'localhost',
        port: 5432,
        username: 'onderzoek_sequelize',
        password: 'topsecret',
        database: 'onderzoek_sequelize',
      });
      sequelize.addModels([Photo, User, Group, UserGroup]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
