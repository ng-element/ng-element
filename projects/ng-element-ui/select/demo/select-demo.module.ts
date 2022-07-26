import { NgModule } from '@angular/core';
import { NelSelectModule } from 'ng-element-ui/select';
import { NelDemoSelectBasicComponent } from './select-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoSelectBasicComponent
  ],
  exports: [
    NelDemoSelectBasicComponent
  ],
  imports: [
    NelSelectModule
  ]
})

export class NelDemoSelectModule { }
