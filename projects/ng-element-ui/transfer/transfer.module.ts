import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTransferComponent } from './transfer.component';

@NgModule({
  declarations: [
    NelTransferComponent
  ],
  exports: [
    NelTransferComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelTransferModule { }
