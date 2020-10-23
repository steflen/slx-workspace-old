import { ActionReducer } from '@ngrx/store';

export function loggerReducer(actionReducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any): any => {
    switch (action.type) {
      case '@ngrx/store/init':
        break;
      case '@ngrx/store/update-reducers':
        break;
      case '@ngrx/store-devtools/recompute':
        break;
      case '@ngrx/effects/init':
        break;
      case '@ngrx/router-store/request':
        console.log('nav request', action.payload.event.url);
        break;
      case '@ngrx/router-store/navigation':
        console.log('nav start', action.payload.event.url);
        break;
      case '@ngrx/router-store/navigated':
        console.log('nav end', action.payload.event.url);
        break;
      default:
        console.log('state', state);
        console.log('action', action);
        break;
    }

    return actionReducer(state, action);
  };
}
