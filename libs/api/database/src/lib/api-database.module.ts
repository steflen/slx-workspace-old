import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { databaseProviders } from './providers/database.providers';

@Module({
  imports: [LoggerModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class ApiDatabaseModule {}
