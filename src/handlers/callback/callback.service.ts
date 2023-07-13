import { Injectable } from '@nestjs/common';
import { CallbackDto } from './callback.dto';
import { HttpService } from '@nestjs/axios';
import { CustomLogger } from 'src/services/custom-logger/custom-logger.service';
import { ShellExecutor } from 'src/services/shell-executor/shell-executor.service';

@Injectable()
export class CallbackService {
  constructor(
    private readonly httpService: HttpService,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('CallbackService');
  }

  async handleCallback(data: CallbackDto) {
    try {
      this.logger.verbose(
        `Пуш в репозиторий "${data.repository.name}"; Запрос - ${JSON.stringify(
          data.push_data,
          null,
          '  ',
        )}`,
      );

      const dockerProcess = new ShellExecutor('docker');
      const dockerComposeFilePath =
        '/var/www/html/volokut.ru/docker-compose.yml';

      // await dockerProcess.execAsync([
      //   'compose',
      //   '-f',
      //   dockerComposeFilePath,
      //   'pull',
      //   data.repository.name,
      // ]);

      // await dockerProcess.execAsync([
      //   'compose',
      //   'up',
      //   '-d',
      //   '--no-deps',
      //   data.repository.name,
      // ]);

      this.httpService.post(data.callback_url, {
        state: 'success',
        description: `Успешная сборка – ${new Date().toLocaleDateString(
          'ru-RU',
          {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          },
        )}`,
      });
    } catch (e) {
      this.logger.error((e as Error).message);
    }
  }
}
