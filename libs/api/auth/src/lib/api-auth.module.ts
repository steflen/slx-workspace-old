import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ApiUserModule } from '@slx/api-user';
import { ApiAuthController } from './api-auth.controller';
import { ApiAuthService } from './api-auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [forwardRef(() => ApiUserModule), PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ApiAuthController],
  providers: [ApiAuthService, JwtStrategy, JwtAuthGuard, RolesGuard],
  exports: [PassportModule.register({ defaultStrategy: 'jwt' }), JwtAuthGuard, RolesGuard, ApiAuthService],
})
export class ApiAuthModule {}
