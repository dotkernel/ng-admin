import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/authentication/authentication.module')
      .then(m => m.AuthenticationModule),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./core/miscellaneous/miscellaneous.module')
      .then(m => m.MiscellaneousModule),
  },
];

const config: ExtraOptions = {
    useHash: false,
  };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
