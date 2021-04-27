import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [
    EmptyComponent
  ],
  exports: [
    EmptyComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelEmptyModule { }
