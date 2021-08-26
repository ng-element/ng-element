import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelRateModule } from 'ng-element-ui/rate';
import { NelDemoRateBasicComponent } from './rate-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoRateBasicComponent
  ],
  exports: [
    NelDemoRateBasicComponent
  ],
  imports: [
    FormsModule,
    NelRateModule
  ]
})

export class NelDemoRateModule { }
