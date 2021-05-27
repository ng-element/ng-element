import { NgModule } from '@angular/core';
import { NelDemoPopoverModule } from './../../../projects/ng-element-ui/popover/demo/popover-demo.module';
import { SharedModule } from './../shared/shared.module';
import { PopoverRoutingModule } from './popover-routing.module';
import { PopoverComponent } from './popover.component';

@NgModule({
  declarations: [
    PopoverComponent
  ],
  exports: [
    PopoverComponent
  ],
  imports: [
    NelDemoPopoverModule,
    SharedModule,
    PopoverRoutingModule
  ]
})

export class PopoverModule { }
