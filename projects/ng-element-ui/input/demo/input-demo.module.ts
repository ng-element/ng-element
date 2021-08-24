import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelInputModule } from 'ng-element-ui/input';
import { NelDemoInputBasicComponent } from './input-demo-basic.component';
import { NelDemoInputDisabledComponent } from './input-demo-disabled.component';
import { NelDemoInputClearableComponent } from './input-demo-clearable.component';
import { NelDemoInputShowPasswordComponent } from './input-demo-show-password.component';
import { NelDemoInputSizeComponent } from './input-demo-size.component';

@NgModule({
  declarations: [
    NelDemoInputBasicComponent,
    NelDemoInputDisabledComponent,
    NelDemoInputClearableComponent,
    NelDemoInputShowPasswordComponent,
    NelDemoInputSizeComponent
  ],
  exports: [
    NelDemoInputBasicComponent,
    NelDemoInputDisabledComponent,
    NelDemoInputClearableComponent,
    NelDemoInputShowPasswordComponent,
    NelDemoInputSizeComponent
  ],
  imports: [
    FormsModule,
    NelInputModule
  ]
})

export class NelDemoInputModule { }
