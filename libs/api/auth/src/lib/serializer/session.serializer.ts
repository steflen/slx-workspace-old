import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(@InjectPinoLogger(SessionSerializer.name) protected readonly log: PinoLogger) {
    super();
  }
  serializeUser(user: any, done: (err: any, id?: any) => void): void {
    this.log.info('Serialize user %o', user);
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: any, id?: any) => void): void {
    this.log.info('Deserialize user %o', payload);
    done(null, payload);
  }
}
