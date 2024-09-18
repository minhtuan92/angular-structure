import { Routes } from '@angular/router';

export const ROUTES = {
  HOME: 'home',
  ORDER: 'order',
  PRODUCT: 'product',
} as const;

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.HOME,
  },
  {
    path: ROUTES.HOME,
    loadChildren: () => import('./feature/home/home.routes'),
  },
  {
    path: ROUTES.ORDER,
    loadChildren: () => import('./feature/order/order.routes'),
  },
  {
    path: ROUTES.PRODUCT,
    loadChildren: () => import('./feature/product/product.routes'),
  },
];
