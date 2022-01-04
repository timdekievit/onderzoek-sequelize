import { Module } from '@nestjs/common';
import { userProviders } from 'src/providers/user.provider';
// import { CatsController } from './cats.controller';
// import { CatsService } from './cats.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
  ],
})
export class UserModule {}