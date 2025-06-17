import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./routes/home/home').then((m) => m.Home),
  },
  {
    path: 'orders',
    loadComponent: () => import('./routes/orders/orders').then((m) => m.Orders),
  },
];
