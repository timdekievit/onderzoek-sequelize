import { Sequelize } from 'sequelize-typescript';
import { Group } from './models/group.entity';
import { Photo } from './models/photo.entity';
import { User } from './models/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'onderzoek_sequelize',
        password: 'topsecret',
        database: 'onderzoek_sequelize',
      });
      sequelize.addModels([Photo, User, Group]);
      await sequelize.sync();
      return sequelize;
    },
  },
];