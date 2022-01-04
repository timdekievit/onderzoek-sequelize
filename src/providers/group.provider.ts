import { Group } from "src/models/group.entity";


export const groupProviders = [
  {
    provide: 'GROUP_REPOSITORY',
    useValue: Group,
  },
];