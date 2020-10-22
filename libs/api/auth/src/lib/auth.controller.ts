import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

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
