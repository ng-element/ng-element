import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTransferModule } from 'ng-element-ui/transfer';
import { NelDemoTransferBasicComponent } from './transfer-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoTransferBasicComponent
  ],
  exports: [
    NelDemoTransferBasicComponent
  ],
  imports: [
    CommonModule,
    NelTransferModule
  ]
})

export class NelDemoTransferModule { }
