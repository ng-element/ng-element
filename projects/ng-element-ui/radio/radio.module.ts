import { NgModule } from '@angular/core';
import { NelRadioComponent } from './radio.component';
import { NelRadioButtonComponent } from './radio-button.component';
import { NelRadioGroupComponent } from './radio-group.component';

@NgModule({
  declarations: [
    NelRadioComponent,
    NelRadioGroupComponent,
    NelRadioButtonComponent
  ],
  exports: [
    NelRadioComponent,
    NelRadioGroupComponent,
    NelRadioButtonComponent
  ],
  providers: [
  ]
})

export class NelRadioModule { }
