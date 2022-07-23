import { NgModule } from '@angular/core';
import { NelDemoBreadcrumbModule } from '../../../../projects/ng-element-ui/breadcrumb/demo/breadcrumb-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ],
  imports: [
    NelDemoBreadcrumbModule,
    SharedModule,
    BreadcrumbRoutingModule
  ]
})

export class BreadcrumbModule { }
