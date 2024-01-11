import { createReducer, on } from '@ngrx/store';
import * as appActions from './app-actions';
import { AppStore } from './app-store';

export const initialState: AppStore = {
  isClearFilter: true,
};

export const appReducer = createReducer(
  initialState,
  on(appActions.setClearFilter, (state) => ({ ...state, isClearFilter: true })),
  on(appActions.clearFilterHandled, (state) => ({ ...state, isClearFilter: false }))
);
