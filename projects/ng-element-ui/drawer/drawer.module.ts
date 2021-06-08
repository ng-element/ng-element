import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelDrawerComponent } from './drawer.component';

@NgModule({
  declarations: [
    NelDrawerComponent
  ],
  exports: [
    NelDrawerComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelOutletModule
  ]
})

export class NelDrawerModule { }
