import { NgModule } from '@angular/core';
import { NelAlertModule } from 'ng-element-ui/alert';
import { AlertRoutingModule } from '../../../src/app/alert/alert-routing.module';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    NelAlertModule,
    AlertRoutingModule
  ],
  exports: [
    AlertComponent
  ]
})

export class AlertModule {

}
