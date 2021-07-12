import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NelCheckboxModule } from 'ng-element-ui/checkbox';
import { NelDemoCheckboxBasicComponent } from './checkbox-demo-basic.component';
import { NelDemoCheckboxDisabledComponent } from './checkbox-demo-disabled.component';
import { NelDemoCheckboxGroupComponent } from './checkbox-demo-group.component';
import { NelDemoCheckboxIndeterminateComponent } from './checkbox-demo-indeterminate.component';

@NgModule({
  declarations: [
    NelDemoCheckboxBasicComponent,
    NelDemoCheckboxDisabledComponent,
    NelDemoCheckboxGroupComponent,
    NelDemoCheckboxIndeterminateComponent
  ],
  exports: [
    NelDemoCheckboxBasicComponent,
    NelDemoCheckboxDisabledComponent,
    NelDemoCheckboxGroupComponent,
    NelDemoCheckboxIndeterminateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NelCheckboxModule
  ]
})

export class NelDemoCheckboxModule { }
