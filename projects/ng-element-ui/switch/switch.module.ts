import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelSwitchComponent } from './switch.component';

@NgModule({
  declarations: [
    NelSwitchComponent
  ],
  exports: [
    NelSwitchComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelSwitchModule { }
