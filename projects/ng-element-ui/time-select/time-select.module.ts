import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelTimeSelectComponent } from './time-select.component';

@NgModule({
  declarations: [
    NelTimeSelectComponent
  ],
  exports: [
    NelTimeSelectComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelTimeSelectModule { }
