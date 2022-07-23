import { NgModule } from '@angular/core';
import { NelDemoRateModule } from '../../../../projects/ng-element-ui/rate/demo/rate-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { RateRoutingModule } from './rate-routing.module';
import { RateComponent } from './rate.component';

@NgModule({
  declarations: [
    RateComponent
  ],
  exports: [
    RateComponent
  ],
  imports: [
    NelDemoRateModule,
    SharedModule,
    RateRoutingModule
  ]
})

export class RateModule { }
