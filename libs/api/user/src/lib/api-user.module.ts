import { forwardRef, Module } from '@nestjs/common';
import { ApiDatabaseModule } from '@slx/api-database/api-database.module';
import { UserController } from './controllers/user.controller';
import { userModelProviders } from './providers/user.providers';
import { UserService } from './services/user.service';

@Module({
  imports: [
    /*forwardRef(() => AuthModule),*/
    forwardRef(() => ApiDatabaseModule),
  ],
  controllers: [UserController /*, ProfileController*/],
  providers: [UserService, /* ProfileService,*/ ...userModelProviders /*, ...profileModelProviders*/],
  exports: [UserService /*, ProfileService*/],
})
export class UserModule {}
