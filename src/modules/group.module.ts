import { Module } from '@nestjs/common';
import { groupProviders } from 'src/providers/group.provider';
// import { CatsController } from './cats.controller';
// import { CatsService } from './cats.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...groupProviders,
  ],
})
export class GroupModule {}