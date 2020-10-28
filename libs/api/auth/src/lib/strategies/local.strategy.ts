import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@slx/api-user/models/user.model';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    @InjectPinoLogger(LocalStrategy.name) private readonly log: PinoLogger,
  ) {
    super();
    // super({passwordField:'password', usernameField:'pseudo'});
  }

  async validate(username: string, password: string): Promise<User> {
    this.log.info('Validate local %s // %s', username, password);
    const user: User = await this.authService.signIn(username, password);
    this.log.info(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
