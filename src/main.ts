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

  const configService = app.get(ConfigService<Record<string, string>>);

  await app.listen(configService.get('PORT'), configService.get('HOST'));

  console.log(`Listens: ${await app.getUrl()}`);
}

bootstrap();
