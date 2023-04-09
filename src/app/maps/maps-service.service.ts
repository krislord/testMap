import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  // mapDataArr: {clickTime:string,coordinates:string}[] = [];
  // private mapDataSubject = new Subject<void>();
  constructor(private http: HttpClient) {
    // this.mapDataSubject.subscribe(() => {
    //  this.updateCoordinates().subscribe(console.log);
    // })
  }



public addNewMapData(newData: { clickTime: string; coordinates: string }): void {
  // console.log('first?', newData)
  //   this.mapDataArr.push(newData);
  //   this.mapDataSubject.next();
  }

  public updateCoordinates (data:{ timestamp: string; coords: string }[]):Observable<any> {
    console.log(data)
    return this.http.post('http://localhost:3000/upload', {data});
  }
}
