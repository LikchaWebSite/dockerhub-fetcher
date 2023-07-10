import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CustomLogger } from './services/custom-logger/custom-logger.service';
import { ConfigService } from '@nestjs/config';
import SwaggerConfig from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const document = SwaggerModule.createDocument(app, SwaggerConfig);

  SwaggerModule.setup('docs', app, document);

  app.useLogger(new CustomLogger());

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));

  console.log(`Listens: ${await app.getUrl()}`);
}

bootstrap();
