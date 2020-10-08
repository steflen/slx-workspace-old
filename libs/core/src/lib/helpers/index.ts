import { MetaReducer } from '@ngrx/store';
import { metaLogger } from './meta-logger.reducer';

// environment injection token !
const production = false;

export const metaReducers: Array<MetaReducer<any>> = !production ? [metaLogger] : [];
