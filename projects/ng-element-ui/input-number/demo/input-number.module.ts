import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelInputNumberModule } from 'ng-element-ui/input-number';
import { NelDemoInputNumberBasicComponent } from './input-number-demo-basic.component';
import { NelDemoInputNumberDisabledComponent } from './input-number-demo-disabled.component';

@NgModule({
  declarations: [
    NelDemoInputNumberBasicComponent,
    NelDemoInputNumberDisabledComponent
  ],
  exports: [
    NelDemoInputNumberBasicComponent,
    NelDemoInputNumberDisabledComponent
  ],
  imports: [
    FormsModule,
    NelInputNumberModule
  ]
})

export class NelDemoInputNumberModule { }
