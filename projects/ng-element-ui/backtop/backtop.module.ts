import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { BacktopComponent } from './backtop.component';

@NgModule({
  declarations: [
    BacktopComponent
  ],
  exports: [
    BacktopComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelBacktopModule { }
