import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NelBreadcrumbModule } from 'ng-element-ui/breadcrumb';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDemoBreadcrumbBasicComponent } from './breadcrumb-demo-basic.component';
import { NelDemoBreadcrumbSeparatorComponent } from './breadcrumb-demo-separator.component';

@NgModule({
  declarations: [
    NelDemoBreadcrumbBasicComponent,
    NelDemoBreadcrumbSeparatorComponent
  ],
  exports: [
    NelDemoBreadcrumbBasicComponent,
    NelDemoBreadcrumbSeparatorComponent
  ],
  imports: [
    RouterModule,
    NelBreadcrumbModule,
    NelIconModule
  ]
})

export class NelDemoBreadcrumbModule { }
