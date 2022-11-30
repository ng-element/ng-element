import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelFormComponent } from './form.component';
import { NelFormItemComponent } from './form-item.component';

@NgModule({
  declarations: [
    NelFormComponent,
    NelFormItemComponent
  ],
  exports: [
    NelFormComponent,
    NelFormItemComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelFormModule { }
