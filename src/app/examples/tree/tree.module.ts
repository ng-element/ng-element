import { NgModule } from '@angular/core';
import { NelDemoTreeModule } from '../../../../projects/ng-element-ui/tree/demo/tree-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';

@NgModule({
  declarations: [
    TreeComponent
  ],
  exports: [
    TreeComponent
  ],
  imports: [
    NelDemoTreeModule,
    SharedModule,
    TreeRoutingModule
  ]
})

export class TreeModule { }
