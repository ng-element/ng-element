import { NgModule } from '@angular/core';
import { NelBacktopModule } from 'ng-element-ui/backtop';
import { NelDemoBacktopBasicComponent } from './backtop-demo-basic.component';
import { NelDemoBacktopTargetComponent } from './backtop-demo-target.component';

@NgModule({
  declarations: [
    NelDemoBacktopBasicComponent,
    NelDemoBacktopTargetComponent
  ],
  exports: [
    NelDemoBacktopBasicComponent,
    NelDemoBacktopTargetComponent
  ],
  imports: [
    NelBacktopModule
  ]
})

export class NelDemoBacktopModule { }
