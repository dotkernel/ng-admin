import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: '**',
    loadChildren: () => import('../miscellaneous/miscellaneous.module')
      .then(m => m.MiscellaneousModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
