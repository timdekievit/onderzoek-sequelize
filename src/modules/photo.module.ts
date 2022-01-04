import { Module } from '@nestjs/common';
import { photoProviders } from 'src/providers/photo.providers';
// import { CatsController } from './cats.controller';
// import { CatsService } from './cats.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...photoProviders,
  ],
})
export class PhotoModule {}