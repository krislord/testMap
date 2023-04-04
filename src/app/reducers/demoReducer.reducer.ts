
// import { Demo } from "../models/demo/demo.model";
// import { AddDemo } from "../actions/demo.action";

// const initialState: Demo = {
//   timestamp: '',
//   coords: ''
// }

// export function reducer(state: Demo = initialState, action: any) {
//   switch (action.type) {
//     case AddDemo:
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// }

// src/app/reducers/demo.reducer.ts
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

