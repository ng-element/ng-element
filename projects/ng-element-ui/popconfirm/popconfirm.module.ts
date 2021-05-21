import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelPopconfirmDirective } from './popconfirm.directive';
import { NelPopconfirmComponent } from './popconfirm.component';

@NgModule({
  declarations: [
    NelPopconfirmDirective,
    NelPopconfirmComponent
  ],
  exports: [
    NelPopconfirmDirective,
    NelPopconfirmComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelButtonModule,
    NelIconModule
  ]
})

export class NelPopconfirmModule { }
