import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SecondLayoutComponent } from './layout/second-layout/second-layout.component';

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
    component: MainLayoutComponent,
    loadChildren: () => import('./feature/home/home.routes'),
  },
  {
    path: ROUTES.ORDER,
    component: SecondLayoutComponent,
    loadChildren: () => import('./feature/order/order.routes'),
  },
  {
    path: ROUTES.PRODUCT,
    component: SecondLayoutComponent,
    loadChildren: () => import('./feature/product/product.routes'),
  },
];
