import { NgModule } from '@angular/core';
import { NelPaginationModule } from 'ng-element-ui/pagination';
import { NelDemoPaginationBasicComponent } from './pagination-demo-basic.component';
import { NelDemoPaginationPagerCountComponent } from './pagination-demo-pager-count.component';
import { NelDemoPaginationBackgroundComponent } from './pagination-demo-background.component';
import { NelDemoPaginationSmallComponent } from './pagination-demo-small.component';

@NgModule({
  declarations: [
    NelDemoPaginationBasicComponent,
    NelDemoPaginationPagerCountComponent,
    NelDemoPaginationBackgroundComponent,
    NelDemoPaginationSmallComponent
  ],
  exports: [
    NelDemoPaginationBasicComponent,
    NelDemoPaginationPagerCountComponent,
    NelDemoPaginationBackgroundComponent,
    NelDemoPaginationSmallComponent
  ],
  imports: [
    NelPaginationModule
  ]
})

export class NelDemoPaginationModule { }
