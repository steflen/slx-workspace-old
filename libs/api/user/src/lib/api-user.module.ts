import { forwardRef, Module } from '@nestjs/common';
import { ApiDatabaseModule } from '@slx/api-database/api-database.module';
import { ProfileController } from './controllers/profile.controller';
import { UserController } from './controllers/user.controller';
import { profileModelProviders } from './providers/profile.providers';
import { userModelProviders } from './providers/user.providers';
import { ProfileService } from './services/profile.service';
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
