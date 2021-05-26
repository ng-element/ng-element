import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelButtonComponent } from './button.component';
import { NelButtonGroupComponent } from './button-group.component';

@NgModule({
  declarations: [
    NelButtonComponent,
    NelButtonGroupComponent
  ],
  exports: [
    NelButtonComponent,
    NelButtonGroupComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelButtonModule {

}
