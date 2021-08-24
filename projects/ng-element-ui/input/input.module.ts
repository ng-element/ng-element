import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelInputComponent } from './input.component';

@NgModule({
  declarations: [
    NelInputComponent
  ],
  exports: [
    NelInputComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelInputModule { }
