import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // constructor(@InjectPinoLogger(LocalAuthGuard.name) private readonly log: PinoLogger) {
  //   super();
  // }
  // async canActivate(context: ExecutionContext) {
  //   this.log.info('Can Activate %o');
  //
  //   const result = (await super.canActivate(context)) as boolean;
  //   const request = context.switchToHttp().getRequest();
  //   await super.logIn(request);
  //   return result;
  // }
}
