import { Inject, Injectable } from '@nestjs/common';
import sequelize from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Group } from './models/group.entity';
import { Photo } from './models/photo.entity';
import { User } from './models/user.entity';
import { UserGroup } from './models/user_group.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // defaultConnection = getConnectionManager().get('default');
  // const sequelize = new Sequelize('postgres://user:onderzoek_sequelize:5432/onderzoek_sequelize')
  // userArray: User[];

  async seedUsers() {
    // const userRepository = this.defaultConnection.getRepository(User);
    // @Inject('UsersRepository')
    // const userRepository;

    // sequelize.

    for (let index = 0; index < 1000; index++) {
      const user = new User();

      user.firstName = 'Tim' + index.toString();
      user.lastName = 'Kievit' + index.toString();
      user.prefix = 'de' + index.toString();

      // await User.create({
      //   firstName: user.firstName,
      //   lastName: user.lastName,
      //   prefix: user.prefix,
      // });
      // await User.create(user);

      console.log(user);
    }

    // this.userArray = await userRepository.find();
  }

  async seedGroups() {
    // const groupRepository = this.defaultConnection.getRepository(Group);

    for (let index = 0; index < 1000; index++) {
      const group = new Group();
      const userGroup = new UserGroup();

      group.name = 'groep' + index.toString();
      group.description = 'groep voor testen' + index.toString();

      try {
        if (index !== 999) {
          userGroup = [this.userArray[index], this.userArray[index + 1]];
        } else {
          group.users = [this.userArray[index]];
        }
      } catch (error) {
        console.log(error);
      }

      await groupRepository.save(group);

      console.log(group);
    }
  }

  async seedPhotos() {
    const photoRepository = this.defaultConnection.getRepository(Photo);

    for (let index = 0; index < 1000; index++) {
      const photo = new Photo();

      photo.name = 'photo' + index.toString();
      photo.description = 'photo voor testen' + index.toString();
      photo.user = this.userArray[index];

      await photoRepository.save(photo);

      console.log(photo);
    }
  }
}
