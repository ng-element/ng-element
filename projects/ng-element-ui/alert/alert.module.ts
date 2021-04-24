import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NelIconModule } from 'ng-element-ui/icon';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ],
  exports: [
    AlertComponent
  ]
})
export class NelAlertModule { }
