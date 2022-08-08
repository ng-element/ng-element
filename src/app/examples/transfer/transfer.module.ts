import { NgModule } from '@angular/core';
import { NelDemoTransferModule } from '../../../../projects/ng-element-ui/transfer/demo/transfer-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';

@NgModule({
  declarations: [
    TransferComponent
  ],
  exports: [
    TransferComponent
  ],
  imports: [
    NelDemoTransferModule,
    SharedModule,
    TransferRoutingModule
  ]
})

export class TransferModule { }
