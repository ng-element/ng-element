import { NgModule } from '@angular/core';
import { NelDemoPaginationModule } from '../../../../projects/ng-element-ui/pagination/demo/pagination-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ],
  imports: [
    NelDemoPaginationModule,
    SharedModule,
    PaginationRoutingModule
  ]
})

export class PaginationModule { }
