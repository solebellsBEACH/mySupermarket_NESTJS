import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Supermarket')
    .setDescription('This is my SupermarketAPIAplication')
    .setVersion('1.0')
    .addTag('Supermarket')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document)
  await app.listen(3000);
}
bootstrap();
