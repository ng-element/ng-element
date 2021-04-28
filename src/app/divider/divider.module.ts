import { NgModule } from '@angular/core';
import { NelDemoDividerModule } from './../../../projects/ng-element-ui/divider/demo/divider-demo.module';
import { ShareModule } from './../shared/shared.module';
import { DividerRoutingModule } from './divider-routing.module';
import { DividerComponent } from './divider.component';

@NgModule({
  declarations: [
    DividerComponent
  ],
  exports: [
    DividerComponent
  ],
  imports: [
    NelDemoDividerModule,
    ShareModule,
    DividerRoutingModule
  ]
})

export class DividerModule { }
