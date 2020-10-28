import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UserTokenDto } from './dto/user-token.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './services/auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    @InjectPinoLogger(AuthController.name) protected readonly log: PinoLogger,
    private readonly authService: AuthService,
  ) {}

  //@ApiBasicAuth()
  // @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Registers identity. A new user is created' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserTokenDto,
    description: 'Sign up guest user, creates and returns user access token',
  })
  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto) {
    this.log.info('Sign up with credentials: %o', signUpDto);
    return this.authService.signUp(signUpDto);
  }

  // @ApiBasicAuth()
  @UseGuards(LocalAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserTokenDto,
    description: 'Sign In User with local strategy, creates and returns user access token',
  })
  @Post('sign-in')
  async signin(@Body() signInDto: SignInDto) {
    this.log.info('Sign-In with credentials: %o', signInDto);
    return this.authService.createAccessToken(signInDto);
  }

  @UseGuards(LocalAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    this.log.info('Sign-In Request %o', req);
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtectedRoute(@Request() req) {
    this.log.info('Sign-In Request %o', req);
    return req.user;
  }
}
