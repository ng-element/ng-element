import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelTagComponent } from './tag.component';
import { NelCheckTagComponent } from './check-tag.component';

@NgModule({
  declarations: [
    NelTagComponent,
    NelCheckTagComponent
  ],
  exports: [
    NelTagComponent,
    NelCheckTagComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelTagModule { }
