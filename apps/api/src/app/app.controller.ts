import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Logger } from 'nestjs-pino';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly log: Logger) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('protected')
  getProtected(@Req() req) {
    this.log.debug('GET PROTECTED TEST');
    return 'this content is protected';
  }
}
