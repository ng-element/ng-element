import { NgModule } from '@angular/core';
import { NelDemoPopoverModule } from './../../../projects/ng-element-ui/popover/demo/popover-demo.module';
import { ShareModule } from './../shared/shared.module';
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
    ShareModule,
    PopoverRoutingModule
  ]
})

export class PopoverModule { }
