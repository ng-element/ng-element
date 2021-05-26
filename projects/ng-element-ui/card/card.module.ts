import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelCardComponent } from './card.component';

@NgModule({
  declarations: [
    NelCardComponent
  ],
  exports: [
    NelCardComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelCardModule { }
