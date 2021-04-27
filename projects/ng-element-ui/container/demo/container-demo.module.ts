import { NgModule } from '@angular/core';
import { NelContainerModule } from 'ng-element-ui/container';
import { DemoContainerBasicComponent } from './container-demo-basic.component';

@NgModule({
  declarations: [
    DemoContainerBasicComponent
  ],
  exports: [
    DemoContainerBasicComponent
  ],
  imports: [
    NelContainerModule
  ]
})

export class NelDemoContainerModule { }
