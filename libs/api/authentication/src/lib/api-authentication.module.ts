import { Module } from '@nestjs/common';
import { ApiAuthenticationService } from './api-authentication.service';

@Module({
  controllers: [],
  providers: [ApiAuthenticationService],
  exports: [ApiAuthenticationService],
})
export class ApiAuthenticationModule {}
