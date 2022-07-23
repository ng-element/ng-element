import { NgModule } from '@angular/core';
import { NelDemoInputNumberModule } from '../../../../projects/ng-element-ui/input-number/demo/input-number.module';
import { SharedModule } from '../../shared/shared.module';
import { InputNumberRoutingModule } from './input-number-routing.module';
import { InputNumberComponent } from './input-number.component';

@NgModule({
  declarations: [
    InputNumberComponent
  ],
  exports: [
    InputNumberComponent
  ],
  imports: [
    NelDemoInputNumberModule,
    SharedModule,
    InputNumberRoutingModule
  ]
})

export class InputNumberModule { }
