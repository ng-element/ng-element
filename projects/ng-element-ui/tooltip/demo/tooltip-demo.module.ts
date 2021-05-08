import { NgModule } from '@angular/core';
import { NelTooltipModule } from 'ng-element-ui/tooltip';
import { NelButtonModule } from 'ng-element-ui/button';
import { DemoTooltipBasicComponent } from './tooltip-demo-basic.component';
import { DemoTooltipEffectComponent } from './tooltip-demo-effect.component';
import { DemoTooltipContentComponent } from './tooltip-demo-content.component';
import { DemoTooltipDisabledComponent } from './tooltip-demo-disabled.component';

@NgModule({
  declarations: [
    DemoTooltipBasicComponent,
    DemoTooltipEffectComponent,
    DemoTooltipContentComponent,
    DemoTooltipDisabledComponent
  ],
  exports: [
    DemoTooltipBasicComponent,
    DemoTooltipEffectComponent,
    DemoTooltipContentComponent,
    DemoTooltipDisabledComponent
  ],
  imports: [
    NelTooltipModule,
    NelButtonModule
  ]
})

export class NelDemoTooltipModule { }
