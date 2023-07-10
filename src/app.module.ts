import { Module } from '@nestjs/common';
import { CallbackModule } from './handlers/callback/callback.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    CallbackModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
})
export class AppModule {}
