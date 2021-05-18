import { NgModule } from '@angular/core';
import { RadioComponent } from './radio.component';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from './radio-group.component';

@NgModule({
  declarations: [
    RadioComponent,
    RadioGroupComponent,
    RadioButtonComponent
  ],
  exports: [
    RadioComponent,
    RadioGroupComponent,
    RadioButtonComponent
  ],
  providers: [
  ]
})

export class NelRadioModule { }
