import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelCascaderModule } from 'ng-element-ui/cascader';
import { NelDemoCascaderBasicComponent } from './cascader-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoCascaderBasicComponent
  ],
  exports: [
    NelDemoCascaderBasicComponent
  ],
  imports: [
    CommonModule,
    NelCascaderModule
  ]
})

export class NelDemoCascaderModule { }
