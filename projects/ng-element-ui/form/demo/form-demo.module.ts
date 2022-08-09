import { NgModule } from '@angular/core';
import { NelFormModule } from 'ng-element-ui/form';
import { NelDemoFormBasicComponent } from './form-demo-basic.component';
@NgModule({
  declarations: [
    NelDemoFormBasicComponent
  ],
  exports: [
    NelDemoFormBasicComponent
  ],
  imports: [
    NelFormModule
  ]
})

export class NelDemoFormModule { }
