import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {demoReducer} from './reducers/demoReducer.reducer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsModule } from './maps/maps.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FooterComponent } from './ui-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MapsModule,
    StoreModule.forRoot({ demoStore: demoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FooterComponent]
})
export class AppModule { }
