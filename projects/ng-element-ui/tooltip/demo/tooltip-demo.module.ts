import { NgModule } from '@angular/core';
import { NelTooltipModule } from 'ng-element-ui/tooltip';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoTooltipBasicComponent } from './tooltip-demo-basic.component';
import { NelDemoTooltipEffectComponent } from './tooltip-demo-effect.component';
import { NelDemoTooltipContentComponent } from './tooltip-demo-content.component';
import { NelDemoTooltipDisabledComponent } from './tooltip-demo-disabled.component';

@NgModule({
  declarations: [
    NelDemoTooltipBasicComponent,
    NelDemoTooltipEffectComponent,
    NelDemoTooltipContentComponent,
    NelDemoTooltipDisabledComponent
  ],
  exports: [
    NelDemoTooltipBasicComponent,
    NelDemoTooltipEffectComponent,
    NelDemoTooltipContentComponent,
    NelDemoTooltipDisabledComponent
  ],
  imports: [
    NelTooltipModule,
    NelButtonModule
  ]
})

export class NelDemoTooltipModule { }
