import { NgModule } from '@angular/core';
import { NelCheckboxComponent } from './checkbox.component';
import { NelCheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
  declarations: [
    NelCheckboxComponent,
    NelCheckboxGroupComponent
  ],
  exports: [
    NelCheckboxComponent,
    NelCheckboxGroupComponent
  ]
})

export class NelCheckboxModule { }
