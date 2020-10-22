import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '@slx/api-user';
import { PinoLogger } from 'nestjs-pino';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    // forwardRef(() => UserModule),
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (log: PinoLogger, cfg: ConfigService) => {
        const jwtConfig = await cfg.get('jwt');
        log.info({ context: jwtConfig }, '[%s] Initializing JwtModule', AuthModule.name);
        return jwtConfig;
      },
      inject: [PinoLogger, ConfigService],
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {
  constructor(private readonly log: PinoLogger) {
    log.info('Constructor auth module');
  }
}
