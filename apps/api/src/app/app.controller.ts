import { Controller, Get } from '@nestjs/common';
import { Message } from '@slx/api-interfaces';
import { Logger } from 'nestjs-pino';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly logger: Logger) {}

  @Get('hello')
  getData(): Message {
    this.logger.log('Hello');
    return this.appService.getData();
  }
}
