import { ActionReducer } from '@ngrx/store';

export function metaReducer(actionReducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any): any => {
    // tslint:disable-next-line:no-console
    console.log('state', state);
    // tslint:disable-next-line:no-console
    console.log('action', action);
    return actionReducer(state, action);
  };
}
