import { NgModule } from '@angular/core';
import { NelAlertModule } from 'ng-element-ui/alert';
import { DemoAlertBasicComponent } from './alert-demo-basic.component';
import { DemoAlertEffectComponent } from './alert-demo-effect.component';
import { DemoAlertCloseComponent } from './alert-demo-close.component';
import { DemoAlertIconComponent } from './alert-demo-icon.component';
import { DemoAlertCenterComponent } from './alert-demo-center.component';
import { DemoAlertDescriptionComponent } from './alert-demo-description.component';
import { DemoAlertIconDescriptionComponent } from './alert-demo-icon-description.component';

@NgModule({
  declarations: [
    DemoAlertBasicComponent,
    DemoAlertEffectComponent,
    DemoAlertCloseComponent,
    DemoAlertIconComponent,
    DemoAlertCenterComponent,
    DemoAlertDescriptionComponent,
    DemoAlertIconDescriptionComponent
  ],
  exports: [
    DemoAlertBasicComponent,
    DemoAlertEffectComponent,
    DemoAlertCloseComponent,
    DemoAlertIconComponent,
    DemoAlertCenterComponent,
    DemoAlertDescriptionComponent,
    DemoAlertIconDescriptionComponent
  ],
  imports: [
    NelAlertModule
  ]
})

export class NelDemoAlertModule { }
