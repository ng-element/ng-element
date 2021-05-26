import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelEmptyComponent } from './empty.component';

@NgModule({
  declarations: [
    NelEmptyComponent
  ],
  exports: [
    NelEmptyComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelEmptyModule { }
