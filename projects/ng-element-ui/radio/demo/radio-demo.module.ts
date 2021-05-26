import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelRadioModule } from 'ng-element-ui/radio';
import { NelDemoRadioBasicComponent } from './radio-demo-basic.component';
import { NelDemoRadioDisabledComponent } from './radio-demo-disabled.component';
import { NelDemoRadioGroupComponent } from './radio-demo-group.component';
import { NelDemoRadioButtonComponent } from './radio-demo-button.component';
import { NelDemoRadioBorderComponent } from './radio-demo-border.component';

@NgModule({
  declarations: [
    NelDemoRadioBasicComponent,
    NelDemoRadioDisabledComponent,
    NelDemoRadioGroupComponent,
    NelDemoRadioButtonComponent,
    NelDemoRadioBorderComponent
  ],
  exports: [
    NelDemoRadioBasicComponent,
    NelDemoRadioDisabledComponent,
    NelDemoRadioGroupComponent,
    NelDemoRadioButtonComponent,
    NelDemoRadioBorderComponent
  ],
  imports: [
    FormsModule,
    NelRadioModule
  ]
})

export class NelDemoRadioModule { }
