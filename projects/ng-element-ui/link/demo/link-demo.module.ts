import { NgModule } from '@angular/core';
import { NelLinkModule } from 'ng-element-ui/link';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDemoLinkBasicComponent } from './link-demo-basic.component';
import { NelDemoLinkDisabledComponent } from './link-demo-disabled.component';
import { NelDemoLinkUnderlineComponent } from './link-demo-underline.component';
import { NelDemoLinkIconComponent } from './link-demo-icon.component';

@NgModule({
  declarations: [
    NelDemoLinkBasicComponent,
    NelDemoLinkDisabledComponent,
    NelDemoLinkUnderlineComponent,
    NelDemoLinkIconComponent
  ],
  exports: [
    NelDemoLinkBasicComponent,
    NelDemoLinkDisabledComponent,
    NelDemoLinkUnderlineComponent,
    NelDemoLinkIconComponent
  ],
  imports: [
    NelLinkModule,
    NelIconModule
  ]
})

export class NelDemoLinkModule { }
