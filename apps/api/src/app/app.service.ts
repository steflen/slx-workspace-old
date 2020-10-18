import { Injectable } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(private readonly log: Logger) {}

  getHello(): string {
    this.log.debug('GET HELLO');
    return 'Hello World!';
  }
}
