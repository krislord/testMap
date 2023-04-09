import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType , Effect} from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import {addDemo, loadDataSuccess} from '../../actions/demo.action';
import { MapsService } from '../maps-service.service';

@Injectable()
export class DemoEffects {
  payloadArr: any = [];
  constructor(private _maps:MapsService, private $actions: Actions ) {
  };
  @Effect()
  public $loadData = this.$actions.pipe(
    ofType(addDemo),
    mergeMap(({payload}) => {
      this.payloadArr.push(payload)
      return this._maps.updateCoordinates(this.payloadArr).pipe(
        map((data) => loadDataSuccess({payload: data}))
      )
    })
  );
};
