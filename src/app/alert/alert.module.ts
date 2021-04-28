import { NgModule } from '@angular/core';
import { NelAlertModule } from 'ng-element-ui/alert';
import { ShareModule } from './../shared/shared.module';
import { AlertRoutingModule } from '../../../src/app/alert/alert-routing.module';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  imports: [
    NelAlertModule,
    ShareModule,
    AlertRoutingModule
  ],
})

export class AlertModule {

}
