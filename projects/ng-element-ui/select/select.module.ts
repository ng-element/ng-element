import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelSelectComponent } from './select.component';

@NgModule({
  declarations: [
    NelSelectComponent
  ],
  exports: [
    NelSelectComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelSelectModule { }
