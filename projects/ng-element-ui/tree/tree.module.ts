import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTreeComponent } from './tree.component';
import { NelTreeNodeComponent } from './tree-node.component';

@NgModule({
  declarations: [
    NelTreeComponent,
    NelTreeNodeComponent
  ],
  exports: [
    NelTreeComponent,
    NelTreeNodeComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelTreeModule { }
