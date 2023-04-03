import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  mapDataArr: {clickTime:string,coordinates:string}[] = [];
  constructor(private http: HttpClient) { }


  updateCoordinates ():Observable<any> {
    return this.http.get('')
  }
}
