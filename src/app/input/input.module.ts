import { NgModule } from '@angular/core';
import { NelDemoInputModule } from './../../../projects/ng-element-ui/input/demo/input-demo.module';
import { SharedModule } from './../shared/shared.module';
import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    NelDemoInputModule,
    SharedModule,
    InputRoutingModule
  ]
})

export class InputModule { }
