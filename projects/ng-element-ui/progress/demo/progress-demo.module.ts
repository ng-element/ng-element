import { NgModule } from '@angular/core';
import { NelProgressModule } from 'ng-element-ui/progress';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoProgressBasicComponent } from './progress-demo-basic.component';
import { NelDemoProgressTextComponent } from './progress-demo-text.component';
import { NelDemoProgressColorComponent } from './progress-demo-color.component';
import { NelDemoProgressCircleComponent } from './progress-demo-circle.component';
import { NelDemoProgressDashboardComponent } from './progress-demo-dashboard.component';
import { NelDemoProgressFormatComponent } from './progress-demo-format.component';
import { NelDemoProgressIndeterminateComponent } from './progress-demo-indeterminate.component';

@NgModule({
  declarations: [
    NelDemoProgressBasicComponent,
    NelDemoProgressTextComponent,
    NelDemoProgressColorComponent,
    NelDemoProgressCircleComponent,
    NelDemoProgressDashboardComponent,
    NelDemoProgressFormatComponent,
    NelDemoProgressIndeterminateComponent
  ],
  exports: [
    NelDemoProgressBasicComponent,
    NelDemoProgressTextComponent,
    NelDemoProgressColorComponent,
    NelDemoProgressCircleComponent,
    NelDemoProgressDashboardComponent,
    NelDemoProgressFormatComponent,
    NelDemoProgressIndeterminateComponent
  ],
  imports: [
    NelProgressModule,
    NelButtonModule
  ]
})

export class NelDemoProgressModule { }
