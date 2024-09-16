import { Routes } from '@angular/router';

export default <Routes>[
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./order-dashboard/order-dashboard.component').then(
            (m) => m.OrderDashboardComponent,
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
