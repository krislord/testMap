import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SplitCoordsPipe } from './split-coords.pipe';



@NgModule({
  declarations: [FooterComponent, SplitCoordsPipe],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent]
})
export class SharedModule { }
