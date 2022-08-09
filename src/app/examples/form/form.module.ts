import { NgModule } from '@angular/core';
import { NelDemoFormModule } from '../../../../projects/ng-element-ui/form/demo/form-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    NelDemoFormModule,
    SharedModule,
    FormRoutingModule
  ]
})

export class FormModule { }
