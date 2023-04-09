import { Component, OnInit } from '@angular/core';
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { MapsService } from '../maps-service.service';
import { Store } from '@ngrx/store';
import { addDemo } from 'src/app/actions/demo.action';
import BingMaps from 'ol/source/BingMaps';
type API_Key = "Alam4oAvjenfClDq4MdRtZmlXFKLfwv8y_kPt743kP0nII3ml9qW0dfz4C_U7e9d";
@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.scss']
})
export class DisplayMapComponent implements OnInit {
   isDisplayed!:boolean;
   map:Map;
   api_key:API_Key = "Alam4oAvjenfClDq4MdRtZmlXFKLfwv8y_kPt743kP0nII3ml9qW0dfz4C_U7e9d";
  constructor(private _dataService:MapsService, private store: Store) {

  }

  ngOnInit(): void {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new BingMaps({
            key:this.api_key,
            imagerySet: 'Aerial'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 1,
      })

    });
  }

  updateDataArr(e: {clickTime:string,coordinates:string}):void{
      // this._dataService.addNewMapData(e);
      this.store.dispatch(addDemo({payload: {timestamp: e.clickTime, coords: e.coordinates}}))
  }

}
