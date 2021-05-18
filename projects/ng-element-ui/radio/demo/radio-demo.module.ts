import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelRadioModule } from 'ng-element-ui/radio';
import { DemoRadioBasicComponent } from './radio-demo-basic.component';
import { DemoRadioDisabledComponent } from './radio-demo-disabled.component';
import { DemoRadioGroupComponent } from './radio-demo-group.component';
import { DemoRadioButtonComponent } from './radio-demo-button.component';
import { DemoRadioBorderComponent } from './radio-demo-border.component';

@NgModule({
  declarations: [
    DemoRadioBasicComponent,
    DemoRadioDisabledComponent,
    DemoRadioGroupComponent,
    DemoRadioButtonComponent,
    DemoRadioBorderComponent
  ],
  exports: [
    DemoRadioBasicComponent,
    DemoRadioDisabledComponent,
    DemoRadioGroupComponent,
    DemoRadioButtonComponent,
    DemoRadioBorderComponent
  ],
  imports: [
    FormsModule,
    NelRadioModule
  ]
})

export class NelDemoRadioModule { }
