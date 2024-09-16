import { Routes } from '@angular/router';

import { ProductService } from './product.service';

export default <Routes>[
  {
    path: '',
    providers: [ProductService],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./product-list/product-list.component').then(
            (m) => m.ProductListComponent,
          ),
        children: [
          {
            path: 'item-editor/:name',
            loadChildren: () =>
              import('../shared-item-editor/item-editor.routes'),
          },
        ],
      },
    ],
  },
];
