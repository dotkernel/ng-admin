import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrettyDatePipe } from '../pipes/pretty-date.pipe';
import { FullDatePipe } from './full-date.pipe';

@NgModule({
  declarations: [
    PrettyDatePipe,
    FullDatePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrettyDatePipe,
    FullDatePipe
  ]
})
export class PipesModule { }
