import { NgModule } from '@angular/core';
import { NelAlertModule } from 'ng-element-ui/alert';
import { NelDemoAlertBasicComponent } from './alert-demo-basic.component';
import { NelDemoAlertEffectComponent } from './alert-demo-effect.component';
import { NelDemoAlertCloseComponent } from './alert-demo-close.component';
import { NelDemoAlertIconComponent } from './alert-demo-icon.component';
import { NelDemoAlertCenterComponent } from './alert-demo-center.component';
import { NelDemoAlertDescriptionComponent } from './alert-demo-description.component';
import { NelDemoAlertIconDescriptionComponent } from './alert-demo-icon-description.component';

@NgModule({
  declarations: [
    NelDemoAlertBasicComponent,
    NelDemoAlertEffectComponent,
    NelDemoAlertCloseComponent,
    NelDemoAlertIconComponent,
    NelDemoAlertCenterComponent,
    NelDemoAlertDescriptionComponent,
    NelDemoAlertIconDescriptionComponent
  ],
  exports: [
    NelDemoAlertBasicComponent,
    NelDemoAlertEffectComponent,
    NelDemoAlertCloseComponent,
    NelDemoAlertIconComponent,
    NelDemoAlertCenterComponent,
    NelDemoAlertDescriptionComponent,
    NelDemoAlertIconDescriptionComponent
  ],
  imports: [
    NelAlertModule
  ]
})

export class NelDemoAlertModule { }
