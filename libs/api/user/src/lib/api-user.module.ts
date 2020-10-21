import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiAuthModule } from '@slx/api-auth';
import { UserController } from './api-user.controller';
import { ApiUserService } from './api-user.service';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [forwardRef(() => ApiAuthModule), TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  exports: [ApiUserService],
  providers: [ApiUserService],
})
export class ApiUserModule {}
