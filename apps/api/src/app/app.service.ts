import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(private readonly log: Logger, private configService: ConfigService) {}

  getHello(): string {
    this.log.debug('GET HELLO');
    return 'Hello World!';
  }
}
