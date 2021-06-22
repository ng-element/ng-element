import { NgModule } from '@angular/core';
import { NelDemoProgressModule } from './../../../projects/ng-element-ui/progress/demo/progress-demo.module';
import { SharedModule } from './../shared/shared.module';
import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './progress.component';

@NgModule({
  declarations: [
    ProgressComponent
  ],
  exports: [
    ProgressComponent
  ],
  imports: [
    NelDemoProgressModule,
    SharedModule,
    ProgressRoutingModule
  ]
})

export class ProgressModule { }
