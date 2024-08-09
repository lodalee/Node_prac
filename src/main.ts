import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { /* 비동기 작업 */
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
