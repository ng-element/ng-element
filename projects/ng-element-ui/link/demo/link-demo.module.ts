import { NgModule } from '@angular/core';
import { NelLinkModule } from 'ng-element-ui/link';
import { NelIconModule } from 'ng-element-ui/icon';
import { DemoLinkBasicComponent } from './link-demo-basic.component';
import { DemoLinkDisabledComponent } from './link-demo-disabled.component';
import { DemoLinkUnderlineComponent } from './link-demo-underline.component';
import { DemoLinkIconComponent } from './link-demo-icon.component';

@NgModule({
  declarations: [
    DemoLinkBasicComponent,
    DemoLinkDisabledComponent,
    DemoLinkUnderlineComponent,
    DemoLinkIconComponent
  ],
  exports: [
    DemoLinkBasicComponent,
    DemoLinkDisabledComponent,
    DemoLinkUnderlineComponent,
    DemoLinkIconComponent
  ],
  imports: [
    NelLinkModule,
    NelIconModule
  ]
})

export class NelDemoLinkModule { }
