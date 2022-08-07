import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelCascaderComponent } from './cascader.component';

@NgModule({
  declarations: [
    NelCascaderComponent
  ],
  exports: [
    NelCascaderComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelCascaderModule { }
