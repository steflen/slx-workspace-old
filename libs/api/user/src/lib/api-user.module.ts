import { forwardRef, Module } from '@nestjs/common';
import { ApiDatabaseModule } from '@slx/api-database/api-database.module';
import { ProfileController } from '@slx/api-user/controllers/profile.controller';
import { profileModelProviders } from '@slx/api-user/providers/profile.providers';
import { ProfileService } from '@slx/api-user/services/profile.service';
import { UserController } from './controllers/user.controller';
import { userModelProviders } from './providers/user.providers';
import { UserService } from './services/user.service';

@Module({
  imports: [
    /*forwardRef(() => AuthModule),*/
    forwardRef(() => ApiDatabaseModule),
  ],
  controllers: [UserController, ProfileController],
  providers: [UserService, ProfileService, ...userModelProviders, ...profileModelProviders],
  exports: [UserService, ProfileService],
})
export class UserModule {}
