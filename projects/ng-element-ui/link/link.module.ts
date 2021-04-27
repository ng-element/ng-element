import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { LinkComponent } from './link.component';

@NgModule({
  declarations: [
    LinkComponent
  ],
  exports: [
    LinkComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelLinkModule { }
