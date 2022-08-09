import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelFormComponent } from './form.component';

@NgModule({
  declarations: [
    NelFormComponent
  ],
  exports: [
    NelFormComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelFormModule { }
