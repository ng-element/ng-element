import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelBadgeComponent } from './badge.component';

@NgModule({
  declarations: [
    NelBadgeComponent
  ],
  exports: [
    NelBadgeComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelBadgeModule { }
