import { NgModule } from '@angular/core';
import { NelLayoutModule } from 'ng-element-ui/layout';
import { DemoLayoutBasicComponent } from './layout-demo-basic.component';
import { DemoLayoutGutterComponent } from './layout-demo-gutter.component';
import { DemoLayoutBlendComponent } from './layout-demo-blend.component';
import { DemoLayoutOffsetComponent } from './layout-demo-offset.component';
import { DemoLayoutTypeComponent } from './layout-demo-type.component';
import { DemoLayoutReactiveComponent } from './layout-demo-reactive.component';

@NgModule({
  declarations: [
    DemoLayoutBasicComponent,
    DemoLayoutGutterComponent,
    DemoLayoutBlendComponent,
    DemoLayoutOffsetComponent,
    DemoLayoutTypeComponent,
    DemoLayoutReactiveComponent
  ],
  exports: [
    DemoLayoutBasicComponent,
    DemoLayoutGutterComponent,
    DemoLayoutBlendComponent,
    DemoLayoutOffsetComponent,
    DemoLayoutTypeComponent,
    DemoLayoutReactiveComponent
  ],
  imports: [
    NelLayoutModule
  ]
})

export class NelDemoLayoutModule { }
