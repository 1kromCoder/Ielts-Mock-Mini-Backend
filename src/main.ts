import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('IELTS Mock API')
    .setDescription('Minimal IELTS mock backend API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Railway uchun portni faqat process.env.PORT dan olamiz
  // const port = process.env.PORT ?? 3000;
  await app.listen(process.env.PORT || 3000, '0.0.0.0'); // <--- MUHIM: '0.0.0.0' qil
  console.log(`🚀 Server running on port (Swagger: /api)`);
}
bootstrap();
