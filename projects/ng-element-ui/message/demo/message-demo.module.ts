import { NgModule } from '@angular/core';
import { NelMessageModule } from 'ng-element-ui/message';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoMessageBasicComponent } from './message-demo-basic.component';
import { NelDemoMessageTypeComponent } from './message-demo-type.component';
import { NelDemoMessageCloseComponent } from './message-demo-close.component';
import { NelDemoMessageCenterComponent } from './message-demo-center.component';

@NgModule({
  declarations: [
    NelDemoMessageBasicComponent,
    NelDemoMessageTypeComponent,
    NelDemoMessageCloseComponent,
    NelDemoMessageCenterComponent
  ],
  exports: [
    NelDemoMessageBasicComponent,
    NelDemoMessageTypeComponent,
    NelDemoMessageCloseComponent,
    NelDemoMessageCenterComponent
  ],
  imports: [
    NelButtonModule,
    NelMessageModule
  ]
})

export class NelDemoMessageModule { }
