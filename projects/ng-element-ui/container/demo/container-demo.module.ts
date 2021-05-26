import { NgModule } from '@angular/core';
import { NelContainerModule } from 'ng-element-ui/container';
import { NelDemoContainerBasicComponent } from './container-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoContainerBasicComponent
  ],
  exports: [
    NelDemoContainerBasicComponent
  ],
  imports: [
    NelContainerModule
  ]
})

export class NelDemoContainerModule { }
