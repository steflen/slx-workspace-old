import { DynamicModule, Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CORE_CONTROLLERS } from './controllers';
import { CORE_ENTITIES } from './entities';
import { CORE_SERVICES } from './services';

export interface ICoreRootOptions {
  providers: Provider[];
}

@Module({})
export class SlxApiCoreModule {
  static forFeature(options?: { providers: Provider[] }): DynamicModule {
    const providers = options && options.providers ? options.providers : [];
    return {
      module: SlxApiCoreModule,
      imports: [TypeOrmModule.forFeature([...CORE_ENTITIES])],
      providers: [...providers, ...CORE_SERVICES],
      exports: [...CORE_SERVICES],
    };
  }

  static forRoot(options?: ICoreRootOptions): DynamicModule {
    const providers = options && options.providers ? options.providers : [];
    return {
      module: SlxApiCoreModule,
      imports: [TypeOrmModule.forFeature([...CORE_ENTITIES])],
      controllers: [...CORE_CONTROLLERS],
      providers: [...providers, ...CORE_SERVICES],
      exports: [...CORE_SERVICES],
    };
  }
}
