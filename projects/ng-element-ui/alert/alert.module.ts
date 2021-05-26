import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelAlertComponent } from './alert.component';

@NgModule({
  declarations: [
    NelAlertComponent
  ],
  exports: [
    NelAlertComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})
export class NelAlertModule { }
