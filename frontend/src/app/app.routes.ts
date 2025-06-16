import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders').then((m) => m.Orders),
  },
];
