import { spawn } from 'child_process';
import { Observable } from 'rxjs';

export class ShellExecutor {
  command!: string;
  params: string[] = [];

  constructor(command: string, baseParams: string[] = []) {
    this.command = command;
    this.params = baseParams;
  }

  exec(params: string[] = []) {
    const process = spawn(this.command, [...this.params, ...params]);

    return new Observable((subscriber) => {
      process.stdout.on('data', (data) => {
        subscriber.next(data);
      });

      process.on('close', () => {
        subscriber.complete();
      });

      process.on('error', (data) => {
        subscriber.error(data);
      });

      process.stderr.on('data', (data) => {
        subscriber.error(data);
      });
    });
  }

  async execAsync(params: string[] = []): Promise<string> {
    const process = spawn(this.command, [...this.params, ...params]);

    return new Promise((resolve, reject) => {
      process.stdout.on('data', (data) => {
        resolve(data.toString());
      });

      process.on('close', (code) => {
        resolve(String(code));
      });

      process.on('error', (data) => {
        reject(data);
      });

      process.stderr.on('data', (data) => {
        reject(data);
      });
    });
  }
}
