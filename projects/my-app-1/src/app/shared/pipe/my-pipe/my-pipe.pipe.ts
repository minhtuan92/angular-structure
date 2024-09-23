import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'myApp1MyPipe',
  standalone: true,
})
export class MyPipePipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}
