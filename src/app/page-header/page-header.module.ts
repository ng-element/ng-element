import { NgModule } from '@angular/core';
import { NelDemoPageHeaderModule } from './../../../projects/ng-element-ui/page-header/demo/page-header-demo.module';
import { ShareModule } from './../shared/shared.module';
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
    ShareModule,
    PageHeaderRoutingModule
  ]
})

export class PageHeaderModule { }
