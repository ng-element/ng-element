import { NgModule } from '@angular/core';
import { NelDemoCollapseBasicModule } from './../../../projects/ng-element-ui/collapse/demo/collapse-demo.module';
import { ShareModule } from './../shared/shared.module';
import { CollapseRoutingModule } from './collapse-routing.module';
import { CollapseComponent } from './collapse.component';

@NgModule({
  declarations: [
    CollapseComponent
  ],
  exports: [
    CollapseComponent
  ],
  imports: [
    NelDemoCollapseBasicModule,
    ShareModule,
    CollapseRoutingModule
  ]
})

export class CollapseModule { }
