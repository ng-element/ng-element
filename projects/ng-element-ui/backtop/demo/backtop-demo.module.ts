import { NgModule } from '@angular/core';
import { NelBacktopModule } from 'ng-element-ui/backtop';
import { DemoBacktopBasicComponent } from './backtop-demo-basic.component';
import { DemoBacktopTargetComponent } from './backtop-demo-target.component';

@NgModule({
  declarations: [
    DemoBacktopBasicComponent,
    DemoBacktopTargetComponent
  ],
  exports: [
    DemoBacktopBasicComponent,
    DemoBacktopTargetComponent
  ],
  imports: [
    NelBacktopModule
  ]
})

export class NelDemoBacktopModule { }
