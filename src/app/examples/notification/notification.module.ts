import { NgModule } from '@angular/core';
import { NelDemoNotificationModule } from '../../../../projects/ng-element-ui/notification/demo/notification-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  exports: [
    NotificationComponent
  ],
  imports: [
    NelDemoNotificationModule,
    SharedModule,
    NotificationRoutingModule
  ]
})

export class NotificationModule { }
