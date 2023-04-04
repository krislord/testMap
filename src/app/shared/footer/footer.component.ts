import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Demo } from 'src/app/models/demo/demo.model';
import {filter, map, tap} from 'rxjs/operators'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  demoData: Demo;
  isShown:boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('demoStore').pipe(map(data => this.demoData = data),filter((demo) => !!demo.coords && !!demo.timestamp),tap((active) => {
        this.isShown = true;
        console.log(active)
    })).subscribe();
  }

}
