import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTreeModule } from 'ng-element-ui/tree';
import { NelDemoTreeBasicComponent } from './tree-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoTreeBasicComponent
  ],
  exports: [
    NelDemoTreeBasicComponent
  ],
  imports: [
    CommonModule,
    NelTreeModule
  ]
})

export class NelDemoTreeModule { }
