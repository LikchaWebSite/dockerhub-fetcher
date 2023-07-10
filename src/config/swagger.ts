import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle('DockerHub fetcher')
  .setDescription('Обработчик пушей в DockerHub')
  .build();
