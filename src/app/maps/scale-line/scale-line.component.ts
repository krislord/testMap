import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import Map from 'ol/Map';
import ControlScaleLine from 'ol/control/ScaleLine';
@Component({
  selector: 'app-scale-line',
  template: '',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScaleLineComponent implements OnInit {
  @Input() map: Map;
  control: ControlScaleLine;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.control = new ControlScaleLine({
      target: this.elementRef.nativeElement,
    });
    this.map.addControl(this.control);
  }

}
