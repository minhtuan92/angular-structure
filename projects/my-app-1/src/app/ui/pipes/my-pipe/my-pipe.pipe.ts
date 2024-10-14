import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'myApp1MyPipe',
  standalone: true,
})
export class MyPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}
