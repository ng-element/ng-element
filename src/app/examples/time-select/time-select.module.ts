import { NgModule } from '@angular/core';
import { NelDemoTimeSelectModule } from '../../../../projects/ng-element-ui/time-select/demo/time-select-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { TimeSelectRoutingModule } from './time-select-routing.module';
import { TimeSelectComponent } from './time-select.component';

@NgModule({
  declarations: [
    TimeSelectComponent
  ],
  exports: [
    TimeSelectComponent
  ],
  imports: [
    NelDemoTimeSelectModule,
    SharedModule,
    TimeSelectRoutingModule
  ]
})

export class TimeSelectModule { }
