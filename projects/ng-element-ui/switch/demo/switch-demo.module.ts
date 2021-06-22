import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelSwitchModule } from 'ng-element-ui/switch';
import { NelMessageModule } from 'ng-element-ui/message';
import { NelDemoSwitchBasicComponent } from './switch-demo-basic.component';
import { NelDemoSwitchTextComponent } from './switch-demo-text.component';
import { NelDemoSwitchDisabledComponent } from './switch-demo-disabled.component';
import { NelDemoSwitchLoadingComponent } from './switch-demo-loading.component';
import { NelDemoSwitchBeforeComponent } from './switch-demo-before.component';

@NgModule({
  declarations: [
    NelDemoSwitchBasicComponent,
    NelDemoSwitchTextComponent,
    NelDemoSwitchDisabledComponent,
    NelDemoSwitchLoadingComponent,
    NelDemoSwitchBeforeComponent
  ],
  exports: [
    NelDemoSwitchBasicComponent,
    NelDemoSwitchTextComponent,
    NelDemoSwitchDisabledComponent,
    NelDemoSwitchLoadingComponent,
    NelDemoSwitchBeforeComponent
  ],
  imports: [
    FormsModule,
    NelSwitchModule,
    NelMessageModule
  ]
})

export class NelDemoSwitchModule { }
