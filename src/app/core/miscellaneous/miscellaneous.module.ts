import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { RouterModule } from '@angular/router';
import { MiscellaneousComponent } from './miscellaneous.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    MiscellaneousComponent
  ],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class MiscellaneousModule { }
