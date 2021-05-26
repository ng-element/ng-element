import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelLinkComponent } from './link.component';

@NgModule({
  declarations: [
    NelLinkComponent
  ],
  exports: [
    NelLinkComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelLinkModule { }
