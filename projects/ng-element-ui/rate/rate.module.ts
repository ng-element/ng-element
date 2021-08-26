import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelRateComponent } from './rate.component';
import { NelRateItemComponent } from './rate-item.component';

@NgModule({
  declarations: [
    NelRateComponent,
    NelRateItemComponent
  ],
  exports: [
    NelRateComponent,
    NelRateItemComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelRateModule { }
