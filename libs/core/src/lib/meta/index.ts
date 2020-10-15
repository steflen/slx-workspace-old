import { MetaReducer } from '@ngrx/store';
import { metaReducer } from './meta.reducer';

// environment injection token !
const production = false;

export const metaReducers: Array<MetaReducer<any>> = !production ? [metaReducer] : [];
