import { NgModule } from '@angular/core';
import { NelDemoLayoutModule } from './../../../projects/ng-element-ui/layout/demo/layout-demo.module';
import { SharedModule } from './../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    NelDemoLayoutModule,
    SharedModule,
    LayoutRoutingModule
  ]
})

export class LayoutModule { }
