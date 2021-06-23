import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
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
    NelIconModule,
    NelOutletModule
  ]
})
export class NelAlertModule { }
