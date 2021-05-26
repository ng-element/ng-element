import { NgModule } from '@angular/core';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoButtonBasicComponent } from './button-demo-basic.component';
import { NelDemoButtonDisabledComponent } from './button-demo-disabled.component';
import { NelDemoButtonTextComponent } from './button-demo-text.component';
import { NelDemoButtonIconComponent } from './button-demo-icon.component';
import { NelDemoButtonGroupComponent } from './button-demo-group.component';
import { NelDemoButtonLoadingComponent } from './button-demo-loading.component';
import { NelDemoButtonSizeComponent } from './button-demo-size.component';

@NgModule({
  declarations: [
    NelDemoButtonBasicComponent,
    NelDemoButtonDisabledComponent,
    NelDemoButtonTextComponent,
    NelDemoButtonIconComponent,
    NelDemoButtonGroupComponent,
    NelDemoButtonLoadingComponent,
    NelDemoButtonSizeComponent
  ],
  exports: [
    NelDemoButtonBasicComponent,
    NelDemoButtonDisabledComponent,
    NelDemoButtonTextComponent,
    NelDemoButtonIconComponent,
    NelDemoButtonGroupComponent,
    NelDemoButtonLoadingComponent,
    NelDemoButtonSizeComponent
  ],
  imports: [
    NelButtonModule
  ]
})

export class NelDemoButtonModule { }
