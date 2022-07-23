import { NgModule } from '@angular/core';
import { NelDemoDropdownModule } from '../../../../projects/ng-element-ui/dropdown/demo/dropdown-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ],
  imports: [
    NelDemoDropdownModule,
    SharedModule,
    DropdownRoutingModule
  ]
})

export class DropdownModule { }
