import { UserGroup } from 'src/models/user_group.entity';

export const userGroupProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: UserGroup,
  },
];
