import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective,
  ],
  exports: [
    TooltipComponent,
    TooltipDirective,
  ],
  entryComponents: [
    TooltipComponent
  ],
  imports: [
    OverlayModule,
    NelOutletModule
  ]
})

export class NelTooltipModule { }
