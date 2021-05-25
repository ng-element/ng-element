import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelAvatarComponent } from './avatar.component';

@NgModule({
  declarations: [
    NelAvatarComponent
  ],
  exports: [
    NelAvatarComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelAvatarModule { }
