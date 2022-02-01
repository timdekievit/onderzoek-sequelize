import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedService } from './seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = new SeedService();
  await appService.seedUsers();
  await appService.seedGroups();
  await appService.seedPhotos();
  await app.listen(3000);
}
bootstrap();
