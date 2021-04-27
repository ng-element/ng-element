import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StringTemplateDirective } from './string-template.directive';

@NgModule({
  declarations: [
    StringTemplateDirective
  ],
  exports: [
    StringTemplateDirective
  ],
  imports: [
    CommonModule
  ]
})
export class NelOutletModule { }
