import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTimeSelectModule } from 'ng-element-ui/time-select';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoTimeSelectBasicComponent } from './time-select-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoTimeSelectBasicComponent
  ],
  exports: [
    NelDemoTimeSelectBasicComponent
  ],
  imports: [
    CommonModule,
    NelTimeSelectModule,
    NelButtonModule
  ]
})

export class NelDemoTimeSelectModule { }
