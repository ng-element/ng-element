import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelNotificationComponent } from './notification.component';
import { NelNotificationService } from './notification.service';

@NgModule({
  declarations: [
    NelNotificationComponent
  ],
  exports: [
    NelNotificationComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelOutletModule
  ],
  providers: [
    NelNotificationService
  ]
})

export class NelNotificationModule { }
