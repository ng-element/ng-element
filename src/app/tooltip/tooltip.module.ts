import { NgModule } from '@angular/core';
import { NelDemoTooltipModule } from './../../../projects/ng-element-ui/tooltip/demo/tooltip-demo.module';
import { SharedModule } from './../shared/shared.module';
import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [
    TooltipComponent
  ],
  exports: [
    TooltipComponent
  ],
  imports: [
    NelDemoTooltipModule,
    SharedModule,
    TooltipRoutingModule
  ]
})

export class TooltipModule { }
