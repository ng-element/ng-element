import { NgModule } from '@angular/core';
import { NelDemoLayoutModule } from './../../../projects/ng-element-ui/layout/demo/layout-demo.module';
import { ShareModule } from './../shared/shared.module';
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
    ShareModule,
    LayoutRoutingModule
  ]
})

export class LayoutModule { }
