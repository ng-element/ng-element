import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelStepsComponent } from './steps.component';
import { NelStepComponent } from './step.component';

@NgModule({
  declarations: [
    NelStepsComponent,
    NelStepComponent
  ],
  exports: [
    NelStepsComponent,
    NelStepComponent
  ],
  imports: [
    CommonModule,
    NelIconModule,
    NelOutletModule
  ]
})

export class NelStepsModule { }
