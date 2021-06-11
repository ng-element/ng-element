import { NgModule } from '@angular/core';
import { NelNotificationModule } from 'ng-element-ui/notification';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoNotificationBasicComponent } from './notification-demo-basic.component';
import { NelDemoNotificationTypeComponent } from './notification-demo-type.component';
import { NelDemoNotificationPositionComponent } from './notification-demo-position.component';
import { NelDemoNotificationOffsetComponent } from './notification-demo-offset.component';
import { NelDemoNotificationCloseComponent } from './notification-demo-close.component';

@NgModule({
  declarations: [
    NelDemoNotificationBasicComponent,
    NelDemoNotificationTypeComponent,
    NelDemoNotificationPositionComponent,
    NelDemoNotificationOffsetComponent,
    NelDemoNotificationCloseComponent
  ],
  exports: [
    NelDemoNotificationBasicComponent,
    NelDemoNotificationTypeComponent,
    NelDemoNotificationPositionComponent,
    NelDemoNotificationOffsetComponent,
    NelDemoNotificationCloseComponent
  ],
  imports: [
    NelNotificationModule,
    NelButtonModule
  ]
})

export class NelDemoNotificationModule { }
