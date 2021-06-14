import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelMessageBoxComponent } from './message-box.component';
import { NelMessageBoxService } from './message-box.service';

@NgModule({
  declarations: [
    NelMessageBoxComponent
  ],
  exports: [
    NelMessageBoxComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ],
  providers: [
    NelMessageBoxService
  ]
})

export class NelMessageBoxModule { }
