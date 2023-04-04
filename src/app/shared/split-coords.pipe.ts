import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitted'
})
export class SplitCoordsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) {
      return '';
    }
    const lonPattern = /lon: (-?\d+\.\d+)/;
    const latPattern = /lat: (-?\d+\.\d+)/;

    const lonMatch = value.match(lonPattern);
    const latMatch = value.match(latPattern);

    const lon = lonMatch ? `Longitude: ${lonMatch[1]}` : '';
    const lat = latMatch ? `Latitude: ${latMatch[1]}` : '';

    return `${lon}, ${lat}`;
  }

}
