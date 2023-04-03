import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {reducer} from './reducers/demoReducer.reducer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsModule } from './maps/maps.module';
import { HttpClientModule } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MapsModule,
    // StoreModule.forRoot({ demo: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
