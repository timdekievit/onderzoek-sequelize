import { Photo } from "src/models/photo.entity";

export const photoProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useValue: Photo,
  },
];