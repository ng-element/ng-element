import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelBacktopComponent } from './backtop.component';

@NgModule({
  declarations: [
    NelBacktopComponent
  ],
  exports: [
    NelBacktopComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelBacktopModule { }
