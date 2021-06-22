import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelProgressComponent } from './progress.component';

@NgModule({
  declarations: [
    NelProgressComponent
  ],
  exports: [
    NelProgressComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule,
    NelIconModule
  ]
})

export class NelProgressModule { }
