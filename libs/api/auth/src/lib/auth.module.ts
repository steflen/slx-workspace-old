import { DynamicModule, HttpModule, MiddlewareConsumer, Module, NestModule, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlxApiCoreModule } from '@slx/api-core';
import { authenticate } from 'passport';
import { AUTH_CONTROLLERS } from './controllers';
import { AUTH_ENTITIES } from './entities';
import { AUTH_SERVICES } from './services';

@Module({})
export class SlxApiAuthModule implements NestModule {
  static forFeature(options?: { providers: Provider[] }): DynamicModule {
    const providers = options && options.providers ? options.providers : [];
    return {
      module: SlxApiAuthModule,
      imports: [HttpModule, SlxApiCoreModule.forFeature(options), TypeOrmModule.forFeature([...AUTH_ENTITIES])],
      providers: [...providers, ...AUTH_SERVICES],
      exports: [...AUTH_SERVICES],
    };
  }
  static forRoot(options?: { providers: Provider[] }): DynamicModule {
    const providers = options && options.providers ? options.providers : [];
    return {
      module: SlxApiAuthModule,
      imports: [HttpModule, SlxApiCoreModule.forFeature(options), TypeOrmModule.forFeature([...AUTH_ENTITIES])],
      controllers: [...AUTH_CONTROLLERS],
      providers: [...providers, ...AUTH_SERVICES],
      exports: [...AUTH_SERVICES],
    };
  }

  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(authenticate('signup', { session: false, passReqToCallback: true })).forRoutes('api/auth/signup');
    consumer.apply(authenticate('signin', { session: false, passReqToCallback: true })).forRoutes('api/auth/signin');
  }
}
