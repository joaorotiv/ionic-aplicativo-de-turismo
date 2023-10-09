import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'pedradacebola',
    loadComponent: () => import('./parques/pedradacebola/pedradacebola.page').then( m => m.PedradacebolaPage)
  },
];
