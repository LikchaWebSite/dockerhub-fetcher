import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CallbackService } from './callback.service';
import { CallbackDto } from './callback.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('callback')
export class CallbackController {
  constructor(private readonly service: CallbackService) {}

  @Post('/')
  @ApiResponse({ status: HttpStatus.OK })
  async handleCallback(@Body() req: CallbackDto) {
    await this.service.handleCallback(req);
  }
}
