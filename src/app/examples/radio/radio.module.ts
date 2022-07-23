import { NgModule } from '@angular/core';
import { NelDemoRadioModule } from '../../../../projects/ng-element-ui/radio/demo/radio-demo.module';
import { SharedModule } from '../../shared/shared.module';
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
    SharedModule,
    RadioRoutingModule
  ]
})

export class RadioModule { }
