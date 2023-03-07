import { PipesModule } from './../../../pipes/pipes.module';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { menuItems } from '../../../configs/menu';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    InvoiceComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule.forRoot(menuItems),
    PipesModule
  ],
})
export class HomeModule { }
