import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelCascaderComponent } from './cascader.component';
import { NelCascaderPanelComponent } from './cascader-panel.component';

@NgModule({
  declarations: [
    NelCascaderComponent,
    NelCascaderPanelComponent
  ],
  exports: [
    NelCascaderComponent,
    NelCascaderPanelComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelCascaderModule { }
