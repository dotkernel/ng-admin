import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';

@NgModule({
  declarations: [
    HomeComponent,
    InvoiceComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule
  ],
})
export class HomeModule { }
