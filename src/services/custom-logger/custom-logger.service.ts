import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLogger extends ConsoleLogger {
  override verbose(message: any, ...optionalParams: [...any, string?]) {
    // TODO: Сделать логирование в файл

    super.verbose(message, ...optionalParams);
  }
}
