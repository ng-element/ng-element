import { NgModule } from '@angular/core';
import { NelStepsModule } from 'ng-element-ui/steps';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoStepsBasicComponent } from './steps-demo-basic.component';
import { NelDemoStepsTitleComponent } from './steps-demo-title.component';
import { NelDemoStepsDescriptionComponent } from './steps-demo-description.component';
import { NelDemoStepsAlignCenterComponent } from './steps-demo-align-center.component';
import { NelDemoStepsIconComponent } from './steps-demo-icon.component';
import { NelDemoStepsDirectionComponent } from './steps-demo-direction.component';
import { NelDemoStepsSimpleComponent } from './steps-demo-simple.component';

@NgModule({
  declarations: [
    NelDemoStepsBasicComponent,
    NelDemoStepsTitleComponent,
    NelDemoStepsDescriptionComponent,
    NelDemoStepsAlignCenterComponent,
    NelDemoStepsIconComponent,
    NelDemoStepsDirectionComponent,
    NelDemoStepsSimpleComponent
  ],
  exports: [
    NelDemoStepsBasicComponent,
    NelDemoStepsTitleComponent,
    NelDemoStepsDescriptionComponent,
    NelDemoStepsAlignCenterComponent,
    NelDemoStepsIconComponent,
    NelDemoStepsDirectionComponent,
    NelDemoStepsSimpleComponent
  ],
  imports: [
    NelStepsModule,
    NelButtonModule
  ]
})

export class NelDemoStepsModule { }
