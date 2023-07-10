import { Injectable } from '@nestjs/common';
import { CallbackDto } from './callback.dto';
import { HttpService } from '@nestjs/axios';
import { CustomLogger } from 'src/services/custom-logger/custom-logger.service';

@Injectable()
export class CallbackService {
  constructor(
    private readonly httpService: HttpService,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('CallbackService');
  }

  async handleCallback(data: CallbackDto) {
    this.logger.verbose(
      `Пуш в репозиторий "${data.repository.name}"; Запрос - ${JSON.stringify(
        data.push_data,
        null,
        '  ',
      )}`,
    );

    // this.httpService.post(data.callback_url, {
    //   state: 'success',
    //   description: `Успешная сборка – ${new Date().toLocaleDateString('ru-RU', {
    //     year: '2-digit',
    //     month: '2-digit',
    //     day: '2-digit',
    //     hour: '2-digit',
    //     minute: '2-digit',
    //   })}`,
    // });
  }
}
