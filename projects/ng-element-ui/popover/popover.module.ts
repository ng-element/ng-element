import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelPopoverDirective } from './popover.directive';
import { NelPopoverComponent } from './popover.component';

@NgModule({
  declarations: [
    NelPopoverDirective,
    NelPopoverComponent
  ],
  exports: [
    NelPopoverDirective,
    NelPopoverComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelOutletModule
  ]
})

export class NelPopoverModule { }
