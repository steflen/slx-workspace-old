import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ContextService, UtilsService } from '@slx/api-core';
import { ApiUserService, UserDto, UserEntity, UserNotFoundException } from '@slx/api-user';
import { TokenPayloadDto } from './dto/token-payload.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Injectable()
export class ApiAuthService {
  private static _authUserKey = 'user_key';

  constructor(
    public readonly jwtService: JwtService,
    public readonly configService: ConfigService,
    public readonly apiUuserService: ApiUserService,
  ) {}

  async createToken(user: UserEntity | UserDto): Promise<TokenPayloadDto> {
    return new TokenPayloadDto({
      // expiresIn: this.configService.get<number>('JWT_EXPIRATION_TIME'),
      expiresIn: 123123,
      accessToken: await this.jwtService.signAsync({ id: user.id }),
    });
  }

  async validateUser(userLoginDto: UserLoginDto): Promise<UserEntity> {
    const user = await this.apiUuserService.findOne({
      email: userLoginDto.email,
    });
    const isPasswordValid = await UtilsService.validateHash(userLoginDto.password, user && user.password);
    if (!user || !isPasswordValid) {
      throw new UserNotFoundException();
    }
    return user;
  }

  static setAuthUser(user: UserEntity) {
    ContextService.set(ApiAuthService._authUserKey, user);
  }

  static getAuthUser(): UserEntity {
    return ContextService.get(ApiAuthService._authUserKey);
  }
}
