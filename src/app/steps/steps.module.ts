import { NgModule } from '@angular/core';
import { NelDemoStepsModule } from './../../../projects/ng-element-ui/steps/demo/steps-demo.module';
import { SharedModule } from './../shared/shared.module';
import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';

@NgModule({
  declarations: [
    StepsComponent
  ],
  exports: [
    StepsComponent
  ],
  imports: [
    NelDemoStepsModule,
    SharedModule,
    StepsRoutingModule
  ]
})

export class StepsModule { }
