import { NgModule } from '@angular/core';
import { NelDemoMessageModule } from './../../../projects/ng-element-ui/message/demo/message-demo.module';
import { SharedModule } from './../shared/shared.module';
import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';

@NgModule({
  declarations: [
    MessageComponent
  ],
  exports: [
    MessageComponent
  ],
  imports: [
    NelDemoMessageModule,
    SharedModule,
    MessageRoutingModule
  ]
})

export class MessageModule { }
