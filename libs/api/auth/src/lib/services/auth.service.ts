import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '@slx/api-user/dto/create-user.dto';
import { UserRole } from '@slx/api-user/dto/user-role.enum';
import { UserStatus } from '@slx/api-user/dto/user-status.enum';
import { User } from '@slx/api-user/models/user.model';
import { UserService } from '@slx/api-user/services/user.service';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';
import { AccessTokenDto } from '../dto/token.dto';
import { CryptoService } from '../services/crypto.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectPinoLogger(AuthService.name) private readonly log: PinoLogger,
    private readonly configService: ConfigService,
    private readonly usersService: UserService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
  ) {}

  async createAccessToken(user: SignInDto): Promise<AccessTokenDto> {
    this.log.info('Creating access token to sign in user %o', user);
    //password is incorrect parameter here
    const payload = { username: user.username, password: user.password };
    const expiresIn = await this.configService.get<string>('jwt.signOptions.expiresIn');
    const secret = await this.configService.get<string>('jwt.secretOrPrivateKey');
    return {
      expiresIn,
      accessToken: await this.jwtService.signAsync(payload, { secret, expiresIn }),
    };
  }

  async signUp(signUpDto: SignUpDto): Promise<AccessTokenDto> {
    this.log.info('Signing up user with data %o', signUpDto);
    const user: CreateUserDto = {
      email: signUpDto.email,
      username: signUpDto.username,
      password: await this.cryptoService.hashPassword(signUpDto.password),
      role: UserRole.USER,
      status: UserStatus.PENDING,
    };
    return this.usersService.create(user).then((newUser) => this.createAccessToken(newUser));
  }

  async signIn(providedUsername: string, providedPassword: string): Promise<User> {
    try {
      this.log.info('Signing in user %s // %s', providedUsername, providedPassword);
      const user = await this.usersService.findByUsername(providedUsername);
      this.log.info('Found user %o, checking hash %s.', user.password);
      return (await this.cryptoService.checkPassword(user.password, providedPassword))
        ? Promise.resolve(user)
        : Promise.reject(new UnauthorizedException('Invalid password'));
    } catch (err) {
      this.log.error(err);
      throw err;
    }
  }
}
