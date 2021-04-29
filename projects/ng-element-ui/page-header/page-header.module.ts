import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelIconModule } from 'ng-element-ui/icon';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule,
    NelIconModule
  ]
})

export class NelPageHeaderModule { }
