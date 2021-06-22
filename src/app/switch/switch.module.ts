import { NgModule } from '@angular/core';
import { NelDemoSwitchModule } from './../../../projects/ng-element-ui/switch/demo/switch-demo.module';
import { SharedModule } from './../shared/shared.module';
import { SwitchRoutingModule } from './switch-routing.module';
import { SwitchComponent } from './switch.component';

@NgModule({
  declarations: [
    SwitchComponent
  ],
  exports: [
    SwitchComponent
  ],
  imports: [
    NelDemoSwitchModule,
    SharedModule,
    SwitchRoutingModule
  ]
})

export class SwitchModule { }
