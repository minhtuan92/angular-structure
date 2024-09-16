import { Injectable, signal } from '@angular/core';

@Injectable()
export class ProductService {
  products = signal([
    {
      name: 'Porta filter',
    },
    {
      name: 'Espresso machine',
    },
    {
      name: 'Coffee tamper',
    },
  ]);
}
