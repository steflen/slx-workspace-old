import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PinoLogger } from 'nestjs-pino';
import { UserController } from './controllers/user.controller';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

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
