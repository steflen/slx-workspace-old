import { BeforeApplicationShutdown, Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService implements OnApplicationBootstrap, OnApplicationShutdown, BeforeApplicationShutdown {
  constructor(@InjectPinoLogger(AppService.name) private readonly log: PinoLogger) {}

  beforeApplicationShutdown(signal?: string): any {
    this.log.info('API Shutdown Detected %o', signal);
  }

  onApplicationBootstrap(): any {
    this.log.info('API Startup complete');
  }

  onApplicationShutdown(signal?: string): any {
    this.log.info('API application shutting down now %o', signal);
  }
}
