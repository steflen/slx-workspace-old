import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PinoLogger } from 'nestjs-pino';
import { User } from './models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {
  constructor(private readonly log: PinoLogger) {
    log.info('Constructor user module');
  }
}
