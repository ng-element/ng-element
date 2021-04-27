import { NgModule } from '@angular/core';
import { NelButtonModule } from 'ng-element-ui/button';
import { DemoButtonBasicComponent } from './button-demo-basic.component';
import { DemoButtonDisabledComponent } from './button-demo-disabled.component';
import { DemoButtonTextComponent } from './button-demo-text.component';
import { DemoButtonIconComponent } from './button-demo-icon.component';
import { DemoButtonGroupComponent } from './button-demo-group.component';
import { DemoButtonLoadingComponent } from './button-demo-loading.component';
import { DemoButtonSizeComponent } from './button-demo-size.component';

@NgModule({
  declarations: [
    DemoButtonBasicComponent,
    DemoButtonDisabledComponent,
    DemoButtonTextComponent,
    DemoButtonIconComponent,
    DemoButtonGroupComponent,
    DemoButtonLoadingComponent,
    DemoButtonSizeComponent
  ],
  exports: [
    DemoButtonBasicComponent,
    DemoButtonDisabledComponent,
    DemoButtonTextComponent,
    DemoButtonIconComponent,
    DemoButtonGroupComponent,
    DemoButtonLoadingComponent,
    DemoButtonSizeComponent
  ],
  imports: [
    NelButtonModule
  ]
})

export class NelDemoButtonModule { }
