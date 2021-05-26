import { NgModule } from '@angular/core';
import { NelLayoutModule } from 'ng-element-ui/layout';
import { NelDemoLayoutBasicComponent } from './layout-demo-basic.component';
import { NelDemoLayoutGutterComponent } from './layout-demo-gutter.component';
import { NelDemoLayoutBlendComponent } from './layout-demo-blend.component';
import { NelDemoLayoutOffsetComponent } from './layout-demo-offset.component';
import { NelDemoLayoutTypeComponent } from './layout-demo-type.component';
import { NelDemoLayoutReactiveComponent } from './layout-demo-reactive.component';

@NgModule({
  declarations: [
    NelDemoLayoutBasicComponent,
    NelDemoLayoutGutterComponent,
    NelDemoLayoutBlendComponent,
    NelDemoLayoutOffsetComponent,
    NelDemoLayoutTypeComponent,
    NelDemoLayoutReactiveComponent
  ],
  exports: [
    NelDemoLayoutBasicComponent,
    NelDemoLayoutGutterComponent,
    NelDemoLayoutBlendComponent,
    NelDemoLayoutOffsetComponent,
    NelDemoLayoutTypeComponent,
    NelDemoLayoutReactiveComponent
  ],
  imports: [
    NelLayoutModule
  ]
})

export class NelDemoLayoutModule { }
