import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService, JwtAuthGuard, LocalAuthGuard } from '@slx/api-auth';
import { Logger } from 'nestjs-pino';

@Controller()
export class AuthController {
  constructor(private readonly log: Logger, private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    this.log.debug('POST REQUEST => auth/login ');
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    this.log.debug('GET REQUEST => profile');
    return req.user;
  }
}
