import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from './models/group.entity';
import { Photo } from './models/photo.entity';
import { User } from './models/user.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'onderzoek_sequelize',
      password: 'topsecret',
      database: 'onderzoek_sequelize',
      models: [User, Photo, Group],
      autoLoadModels: true,
      synchronize: true
    }),
  ],
})
export class AppModule {}
