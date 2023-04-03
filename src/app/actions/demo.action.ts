import { Action } from "@ngrx/store";
import { Demo } from "../models/demo/demo.model";
enum Demos {
  ADD = "Add Demo"
}

export class AddDemo implements Action {
  type: Demos.ADD;
  constructor(public payload: Demo) {}
}
//d
