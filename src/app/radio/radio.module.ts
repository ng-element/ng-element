import { NgModule } from '@angular/core';
import { NelDemoRadioModule } from './../../../projects/ng-element-ui/radio/demo/radio-demo.module';
import { ShareModule } from './../shared/shared.module';
import { RadioRoutingModule } from './radio-routing.module';
import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [
    RadioComponent
  ],
  exports: [
    RadioComponent
  ],
  imports: [
    NelDemoRadioModule,
    ShareModule,
    RadioRoutingModule
  ]
})

export class RadioModule { }
