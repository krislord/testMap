import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICoords } from './interfaces/icoords';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  constructor(private http: HttpClient) {
  }
  public updateCoordinates (data:ICoords[]):Observable<any> {
    return this.http.post('http://localhost:3000/upload', {data});
  }
}
