// import { Action } from "@ngrx/store";
// import { Demo } from "../models/demo/demo.model";
// enum Demos {
//   ADD = "Add Demo"
// }

// export class AddDemo implements Action {
//   type: Demos.ADD;
//   constructor(public payload: Demo) {}
// }


import { createAction, props } from '@ngrx/store';
import { Demo } from '../models/demo/demo.model';

export const addDemo = createAction(
  '[Demo] Add Demo',
  props<{ payload: Demo }>()
);




export const loadDataSuccess = createAction(
  '[Demo] Load Data Success',
  props<{ payload: any }>()
);


export const loadDataFailure = createAction(
  '[Demo] Load Data Failure',
  props<{ error: any }>()
);
