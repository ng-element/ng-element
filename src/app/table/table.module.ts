import { NgModule } from '@angular/core';
import { NelDemoTableModule } from './../../../projects/ng-element-ui/table/demo/table-demo.module';
import { SharedModule } from './../shared/shared.module';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ],
  imports: [
    NelDemoTableModule,
    SharedModule,
    TableRoutingModule
  ]
})

export class TableModule { }
