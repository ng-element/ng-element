import { NgModule } from '@angular/core';
import { NelPageHeaderModule } from 'ng-element-ui/page-header';
import { DemoPageHeaderBasicComponent } from './page-header-demo-basic.component';
import { DemoPageHeaderIconComponent } from './page-header-demo-icon.component';

@NgModule({
  declarations: [
    DemoPageHeaderBasicComponent,
    DemoPageHeaderIconComponent
  ],
  exports: [
    DemoPageHeaderBasicComponent,
    DemoPageHeaderIconComponent
  ],
  imports: [
    NelPageHeaderModule
  ]
})

export class NelDemoPageHeaderModule { }
