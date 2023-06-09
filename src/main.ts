import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentacion')
    .setDescription('Guia de peticiones para el uso del API Cuatrivagos')
    .setVersion('1.0')
    .addTag('rooms')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Documentacion', app, document);

  await app.listen(3000);
}
bootstrap();
