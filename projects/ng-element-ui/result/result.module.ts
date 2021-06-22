import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelResultComponent } from './result.component';

@NgModule({
  declarations: [
    NelResultComponent
  ],
  exports: [
    NelResultComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelResultModule { }
