import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// see angular.json => exclude modules from prod-build by fileReplacement depending on build-configuration
export const buildSpecificModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 25,
  }),
];
