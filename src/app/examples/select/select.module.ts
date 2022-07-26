import { NgModule } from '@angular/core';
import { NelDemoSelectModule } from '../../../../projects/ng-element-ui/select/demo/select-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [
    SelectComponent
  ],
  exports: [
    SelectComponent
  ],
  imports: [
    NelDemoSelectModule,
    SharedModule,
    SelectRoutingModule
  ]
})

export class SelectModule { }
