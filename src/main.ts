import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS sozlamalarini qo'shish
  app.enableCors({
    origin: '*', // Frontendga ruxsat berish
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(8000); // Backend porti 7000
}

bootstrap();
