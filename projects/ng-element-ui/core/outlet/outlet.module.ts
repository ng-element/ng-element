import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NelStringTemplateDirective } from './string-template.directive';

@NgModule({
  declarations: [
    NelStringTemplateDirective
  ],
  exports: [
    NelStringTemplateDirective
  ],
  imports: [
    CommonModule
  ]
})
export class NelOutletModule { }
