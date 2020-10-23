import { ActionReducer, MetaReducer } from '@ngrx/store';
import { BOARD_FEATURE_DYNA_GRID, BOARD_FEATURE_HOVERLAY } from '@slx/board-domain';
import { localStorageSync } from 'ngrx-store-localstorage';
import {
  SETTINGS_FEATURE_LANGUAGE,
  SETTINGS_FEATURE_LOCALE,
  SETTINGS_FEATURE_LOOK_AND_FEEL,
  SETTINGS_FEATURE_TIME_AND_DATE,
} from '../../../../settings/_domain/src/lib/settings.features';
import { loggerReducer } from './logger.reducer';

// environment injection token !
const production = false;

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [
      SETTINGS_FEATURE_TIME_AND_DATE,
      SETTINGS_FEATURE_LOOK_AND_FEEL,
      SETTINGS_FEATURE_LOCALE,
      SETTINGS_FEATURE_LANGUAGE,
      BOARD_FEATURE_HOVERLAY,
      BOARD_FEATURE_DYNA_GRID,
    ],
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any>> = !production
  ? [loggerReducer, localStorageSyncReducer]
  : [localStorageSyncReducer];
