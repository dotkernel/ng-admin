import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import {AdminComponent} from "./pages/admin/admin.component";
import {UserComponent} from "./pages/user/user.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
      },
      {
        path: 'admins',
        component: AdminComponent
      },
      {
        path: 'users',
        component: UserComponent
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
