import { NgModule } from '@angular/core';
import { NelDemoPageHeaderModule } from './../../../projects/ng-element-ui/page-header/demo/page-header-demo.module';
import { SharedModule } from './../shared/shared.module';
import { PageHeaderRoutingModule } from './page-header-routing.module';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    PageHeaderComponent
  ],
  imports: [
    NelDemoPageHeaderModule,
    SharedModule,
    PageHeaderRoutingModule
  ]
})

export class PageHeaderModule { }
