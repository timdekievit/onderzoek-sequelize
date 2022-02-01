import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = new AppService();
  await appService.seedUsers();
  await app.listen(3000);
}
bootstrap();
