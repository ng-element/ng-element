import { NgModule } from '@angular/core';
import { NelDemoDividerModule } from './../../../projects/ng-element-ui/divider/demo/divider-demo.module';
import { SharedModule } from './../shared/shared.module';
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
    SharedModule,
    DividerRoutingModule
  ]
})

export class DividerModule { }
