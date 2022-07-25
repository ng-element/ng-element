import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelPaginationComponent } from './pagination.component';

@NgModule({
  declarations: [
    NelPaginationComponent
  ],
  exports: [
    NelPaginationComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule,
    NelIconModule
  ]
})

export class NelPaginationModule { }
