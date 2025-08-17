import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
  standalone: true
})
export class CustompipePipe implements PipeTransform {

  transform(value: string): string {
    return `${value.toLowerCase()}`;
  }

}
