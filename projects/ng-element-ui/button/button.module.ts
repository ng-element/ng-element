import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { ButtonComponent } from './button.component';
import { ButtonGroupComponent } from './button-group.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonGroupComponent
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelButtonModule {

}