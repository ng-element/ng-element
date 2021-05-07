import { NgModule } from '@angular/core';
import { NelDemoAlertModule } from './../../../projects/ng-element-ui/alert/demo/alert-demo.module';
import { ShareModule } from './../shared/shared.module';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  imports: [
    NelDemoAlertModule,
    ShareModule,
    AlertRoutingModule
  ],
})

export class AlertModule {

}
