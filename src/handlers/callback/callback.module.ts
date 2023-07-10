import { Module } from '@nestjs/common';
import { CallbackService } from './callback.service';
import { CallbackController } from './callback.controller';
import { HttpModule } from '@nestjs/axios';
import { CustomLoggerModule } from 'src/services/custom-logger/custom-logger.module';

@Module({
  imports: [HttpModule, CustomLoggerModule],
  controllers: [CallbackController],
  providers: [CallbackService],
})
export class CallbackModule {}
