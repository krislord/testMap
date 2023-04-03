import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsModule } from './maps/maps.module';

const routes: Routes = [{
  path: 'maps',
  loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
