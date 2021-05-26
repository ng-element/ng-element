import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelPageHeaderComponent } from './page-header.component';

@NgModule({
  declarations: [
    NelPageHeaderComponent
  ],
  exports: [
    NelPageHeaderComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule,
    NelIconModule
  ]
})

export class NelPageHeaderModule { }
