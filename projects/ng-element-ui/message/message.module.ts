import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelMessageServiceModule } from './message.service.module';
import { NelMessageComponent } from './message.component';

@NgModule({
  declarations: [
    NelMessageComponent
  ],
  exports: [
    NelMessageComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelOutletModule,
    NelMessageServiceModule
  ]
})

export class NelMessageModule { }
