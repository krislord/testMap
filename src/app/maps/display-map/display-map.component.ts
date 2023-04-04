import { Component, OnInit } from '@angular/core';
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { MapsService } from '../maps-service.service';
import { Store } from '@ngrx/store';
import { addDemo } from 'src/app/actions/demo.action';

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.scss']
})
export class DisplayMapComponent implements OnInit {
   isDisplayed!:boolean;
   map:Map;
  constructor(private _dataService:MapsService, private store: Store) {

  }

  ngOnInit(): void {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 1,
      })

    });
  }

  updateDataArr(e: {clickTime:string,coordinates:string}):void{
      this._dataService.addNewMapData(e);
      this.store.dispatch(addDemo({payload: {timestamp: e.clickTime, coords: e.coordinates}}))
  }

}
