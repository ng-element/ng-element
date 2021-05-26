import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelTooltipDirective } from './tooltip.directive';
import { NelTooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [
    NelTooltipComponent,
    NelTooltipDirective
  ],
  exports: [
    NelTooltipComponent,
    NelTooltipDirective
  ],
  entryComponents: [
    NelTooltipComponent
  ],
  imports: [
    OverlayModule,
    NelOutletModule
  ]
})

export class NelTooltipModule { }
