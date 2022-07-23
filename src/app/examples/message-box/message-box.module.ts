import { NgModule } from '@angular/core';
import { NelDemoMessageBoxModule } from '../../../../projects/ng-element-ui/message-box/demo/message-box-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { MessageBoxRoutingModule } from './message-box-routing.module';
import { MessageBoxComponent } from './message-box.component';

@NgModule({
  declarations: [
    MessageBoxComponent
  ],
  exports: [
    MessageBoxComponent
  ],
  imports: [
    NelDemoMessageBoxModule,
    SharedModule,
    MessageBoxRoutingModule
  ]
})

export class MessageBoxModule { }
