import { NgModule } from '@angular/core';
import { NelDemoCheckboxModule } from './../../../projects/ng-element-ui/checkbox/demo/checkbox-demo.module';
import { SharedModule } from './../shared/shared.module';
import { CheckboxRoutingModule } from './checkbox-routing.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  exports: [
    CheckboxComponent
  ],
  imports: [
    NelDemoCheckboxModule,
    SharedModule,
    CheckboxRoutingModule
  ]
})

export class CheckboxModule { }
