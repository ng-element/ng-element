import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelMenuComponent } from './menu.component';

@NgModule({
  declarations: [
    NelMenuComponent
  ],
  exports: [
    NelMenuComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelMenuModule { }
