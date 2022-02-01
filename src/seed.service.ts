import { Inject, Injectable } from '@nestjs/common';
import { Group } from './models/group.entity';
import { Photo } from './models/photo.entity';
import { User } from './models/user.entity';
import { UserGroup } from './models/user_group.entity';

@Injectable()
export class SeedService {

  userArray: User[] = [];

  async seedUsers() {

    for (let index = 0; index < 1000; index++) {
      const user = await User.create();

      user.firstName = 'Tim' + index.toString();
      user.lastName = 'Kievit' + index.toString();
      user.prefix = 'de' + index.toString();

      this.userArray.push(user)

      await user.save();

      console.log(user);
    }

  }

  async seedGroups() {

    for (let index = 0; index < 1000; index++) {
      const group = await Group.create();
      const userGroup = await UserGroup.create();
      const userGroup2 = await UserGroup.create();

      group.name = 'groep' + index.toString();
      group.description = 'groep voor testen' + index.toString();

      try {
        if (index !== 999) {
          userGroup.userId = this.userArray[index].id;
          userGroup.groupId = group.id;
          userGroup2.userId = this.userArray[index + 1].id;
          userGroup2.groupId = group.id;
        } else {
          userGroup.userId = this.userArray[index].id;
        }
      } catch (error) {
        console.log(error);
      }

      await group.save();
      await userGroup.save();
      await userGroup2.save();

    }
  }

  async seedPhotos() {

    for (let index = 0; index < 1000; index++) {
      const photo = await Photo.create();
      photo.name = 'photo' + index.toString();
      photo.description = 'photo voor testen' + index.toString();
      photo.userId = this.userArray[index].id;

      await photo.save();

      console.log(photo);
    }
  }
}
