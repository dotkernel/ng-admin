import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeComponent as HomePage } from './pages/home/home.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomePage
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: '*',
        loadChildren: () => import('../../miscellaneous/miscellaneous.module')
          .then(m => m.MiscellaneousModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
