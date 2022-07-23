import { NgModule } from '@angular/core';
import { NelDemoAlertModule } from '../../../../projects/ng-element-ui/alert/demo/alert-demo.module';
import { SharedModule } from '../../shared/shared.module';
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
    SharedModule,
    AlertRoutingModule
  ],
})

export class AlertModule {

}
