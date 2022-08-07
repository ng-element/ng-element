import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTreeComponent } from './tree.component';

@NgModule({
  declarations: [
    NelTreeComponent
  ],
  exports: [
    NelTreeComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelTreeModule { }
