import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  mapDataArr: {clickTime:string,coordinates:string}[] = [];
  private mapDataSubject = new Subject<void>();
  constructor(private http: HttpClient) {
    this.mapDataSubject.subscribe(() => {
     this.updateCoordinates().subscribe(console.log);
    })
  }



public addNewMapData(newData: { clickTime: string; coordinates: string }): void {
    this.mapDataArr.push(newData);
    this.mapDataSubject.next();
  }

  private updateCoordinates ():Observable<any> {
    return this.http.post('http://localhost:3000/upload', {data: this.mapDataArr});
  }
}
