import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '@slx/api-auth/auth.controller';
import { CryptoService } from '@slx/api-auth/services/crypto.service';
import { UserModule } from '@slx/api-user';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (cfg: ConfigService) => cfg.get<JwtModuleOptions>('jwt'),
      // useFactory: async (log: PinoLogger, cfg: ConfigService) => {
      //   const jwtConfig =
      //   log.info('Initializing JWT with options %o', jwtConfig);
      //   return jwtConfig;
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, CryptoService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
