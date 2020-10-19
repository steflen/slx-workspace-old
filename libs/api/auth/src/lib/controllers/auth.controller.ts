import { Body, Controller, HttpCode, HttpStatus, Inject, Post, Req } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CORE_CONFIG_TOKEN, ICoreConfig } from '@slx/api-core';
import { plainToClass } from 'class-transformer';
import { JsonWebTokenError } from 'jsonwebtoken';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';
import { TokenDto } from '../dto/token.dto';
import { UserTokenDto } from '../dto/user-token.dto';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {
  constructor(
    @Inject(CORE_CONFIG_TOKEN) private readonly coreConfig: ICoreConfig,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserTokenDto,
    description: 'API View that checks the veracity of a token, returning the token if it is valid.',
  })
  async requestJsonWebTokenAfterSignIn(@Req() req, @Body() signInDto: SignInDto): Promise<UserTokenDto> {
    const token = await this.tokenService.create(req.user);
    return plainToClass(UserTokenDto, { user: req.user, token });
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserTokenDto,
    description: `API View that receives a POST with a user's username and password.
        Returns a JSON Web Token that can be used for authenticated requests.`,
  })
  async requestJsonWebTokenAfterSignUp(@Req() req, @Body() signUpDto: SignUpDto): Promise<UserTokenDto> {
    const token = await this.tokenService.create(req.user);
    return plainToClass(UserTokenDto, { user: req.user, token });
  }

  @HttpCode(HttpStatus.OK)
  @Post('info')
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserTokenDto,
    description: 'API View that checks the veracity of a token, returning the token if it is valid.',
  })
  async requestJsonWebTokenAfterInfo(@Req() req, @Body() tokenDto: TokenDto): Promise<UserTokenDto> {
    const validateTokenResult = await this.tokenService.validate(tokenDto.token);
    if (validateTokenResult) {
      const jwtPayload: IJwtPayload = await this.tokenService.decode(tokenDto.token);
      const { user } = await this.authService.info({ id: jwtPayload.id });
      const token = await this.tokenService.create(user);
      return plainToClass(UserTokenDto, { user, token });
    } else {
      throw new JsonWebTokenError('invalid token');
    }
  }
}
