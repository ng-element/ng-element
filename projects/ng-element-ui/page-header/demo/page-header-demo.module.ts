import { NgModule } from '@angular/core';
import { NelPageHeaderModule } from 'ng-element-ui/page-header';
import { NelDemoPageHeaderBasicComponent } from './page-header-demo-basic.component';
import { NelDemoPageHeaderIconComponent } from './page-header-demo-icon.component';

@NgModule({
  declarations: [
    NelDemoPageHeaderBasicComponent,
    NelDemoPageHeaderIconComponent
  ],
  exports: [
    NelDemoPageHeaderBasicComponent,
    NelDemoPageHeaderIconComponent
  ],
  imports: [
    NelPageHeaderModule
  ]
})

export class NelDemoPageHeaderModule { }
