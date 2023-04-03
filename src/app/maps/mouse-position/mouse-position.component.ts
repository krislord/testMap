
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import Map from 'ol/Map';
import ControlMousePosition from 'ol/control/MousePosition';
import { FormatCoordsService } from '../format-coords.service';
import { toLonLat } from 'ol/proj';
@Component({
  selector: 'app-mouse-position',
  template: '',
styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MousePositionComponent implements OnInit {
  @Input() map: Map;
  @Input() positionTemplate: string;
  @Output() coordsAndTS: EventEmitter<{clickTime:string,coordinates:string}> = new EventEmitter<{clickTime:string,coordinates:string}>();
  control: ControlMousePosition;
  constructor(  private element: ElementRef , private formatter: FormatCoordsService) { }
   private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year}:${hours}:${minutes}:${seconds}`;
  }
  ngOnInit(): void {
    this.control = new ControlMousePosition({
      className: 'mouseposition-control',
      coordinateFormat: (coordinates: number[]) => {
        return this.formatter
        .numberCoordinates(coordinates, 4, this.positionTemplate)
      },
      target: this.element.nativeElement,
      // undefinedHTML: undefined,
    });
    this.map.addControl(this.control);
    this.map.on('click', (e) => {
      const coords = toLonLat(this.map.getCoordinateFromPixel(e.pixel))
      const formattedCoordinates = this.formatter.numberCoordinates(coords, 4, this.positionTemplate);

      this.coordsAndTS.emit({
        clickTime: this.formatDate(new Date()),
        coordinates: formattedCoordinates
      })
    })
  }

}
