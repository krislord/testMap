

import { createReducer, on, Action } from '@ngrx/store';
import { Demo } from '../models/demo/demo.model';
import { addDemo } from '../actions/demo.action';

export const initialState: Demo = {
  timestamp: '',
  coords: ''
};

export const _demoReducer = createReducer(
  initialState,
  on(addDemo, (state, { payload }) => ({ ...state, ...payload }))
);

export function demoReducer(state: Demo | undefined, action: Action) {
  return _demoReducer(state, action);
}

