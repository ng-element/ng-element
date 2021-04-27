import { NgModule } from '@angular/core';
import { NelDemoContainerModule } from './../../../projects/ng-element-ui/container/demo/container-demo.module';
import { ShareModule } from './../shared/shared.module';
import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  exports: [
    ContainerComponent
  ],
  imports: [
    NelDemoContainerModule,
    ShareModule,
    ContainerRoutingModule
  ]
})

export class ContainerModule { }
