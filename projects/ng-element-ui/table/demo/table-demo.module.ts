import { NgModule } from '@angular/core';
import { NelTableModule } from 'ng-element-ui/table';
import { NelDemoTableBasicComponent } from './table-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoTableBasicComponent
  ],
  exports: [
    NelDemoTableBasicComponent
  ],
  imports: [
    NelTableModule
  ]
})

export class NelDemoTableModule { }
