import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserTokenDto } from '@slx/api-auth/dto/user-token.dto';
import { CreateUserDto } from '@slx/api-user/dto/create-user.dto';
import { User } from '@slx/api-user/models/user.model';
import { UserService } from '@slx/api-user/services/user.service';
import { validate } from 'class-validator';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { AccessTokenDto } from '../dto/access-token.dto';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';
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
    this.log.info({ user }, 'Creating access token');
    //password is incorrect parameter here
    const payload = { username: user.username, password: user.password };
    const expiresIn = await this.configService.get<string>('jwt.signOptions.expiresIn');
    const secret = await this.configService.get<string>('jwt.secret');
    return {
      expiresIn,
      accessToken: await this.jwtService.signAsync(payload, { secret, expiresIn }),
    };
  }

  async signUp(signUpDto: SignUpDto): Promise<UserTokenDto> {
    try {
      this.log.info({ signUpDto }, 'Signing up user with data %o');
      const user: CreateUserDto = {
        email: signUpDto.email,
        username: signUpDto.username,
        password: await this.cryptoService.hashPassword(signUpDto.password),
        role: 'GUEST',
        status: 'PENDING',
      };
      // this.log.info({ newUser }, 'Created user');
      // const accessToken = await this.createAccessToken(user);
      // this.log.info({ accessToken }, 'Created access token');
      const userToken = new UserTokenDto();
      userToken.accessToken = await this.createAccessToken(user);
      userToken.user = await this.usersService.create(user);

      this.log.info({ userToken }, 'start validation ');
      console.log('start validation', userToken);
      await validate(userToken).then((validationErrors) => {
        // errors is an array of validation errors
        if (validationErrors.length > 0) {
          this.log.error({ validationErrors }, 'Validation of user-token failed');
        } else {
          this.log.info({ userToken }, 'Validation of user-token successful');
        }
      });
      return userToken;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return Promise.reject('User already exists');
      } else {
        this.log.error({ error }, 'Error in sign up');
        throw error;
      }
    }
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
