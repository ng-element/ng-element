import { NgModule } from '@angular/core';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelBreadcrumbComponent } from './breadcrumb.component';
import { NelBreadcrumbItemComponent } from './breadcrumb-item.component';

@NgModule({
  declarations: [
    NelBreadcrumbComponent,
    NelBreadcrumbItemComponent
  ],
  exports: [
    NelBreadcrumbComponent,
    NelBreadcrumbItemComponent
  ],
  imports: [
    NelOutletModule
  ]
})

export class NelBreadcrumbModule { }
