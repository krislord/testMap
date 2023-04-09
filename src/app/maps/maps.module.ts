import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapComponent } from './map/map.component';
import { MapsService } from './maps-service.service';
import { DisplayMapComponent } from './display-map/display-map.component';
import { MapDataComponent } from './map-data/map-data.component';
import { ScaleLineComponent } from './scale-line/scale-line.component';
import { MousePositionComponent } from './mouse-position/mouse-position.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { DemoEffects } from './effects/demo.effects';


@NgModule({
  declarations: [MapComponent, DisplayMapComponent, MapDataComponent, ScaleLineComponent, MousePositionComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule,
    EffectsModule.forRoot([DemoEffects])
  ],
  providers: [MapsService, DecimalPipe]
})
export class MapsModule { }
