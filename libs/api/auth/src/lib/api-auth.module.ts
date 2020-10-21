import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ApiUserModule } from '@slx/api-user';
import { ApiAuthController } from './api-auth.controller';
import { ApiAuthService } from './api-auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [forwardRef(() => ApiUserModule), PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ApiAuthController],
  providers: [ApiAuthService, JwtStrategy, AuthGuard, RolesGuard],
  exports: [PassportModule.register({ defaultStrategy: 'jwt' }), AuthGuard, RolesGuard, ApiAuthService],
})
export class ApiAuthModule {}
