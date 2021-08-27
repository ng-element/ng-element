import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelInputNumberComponent } from './input-number.component';

@NgModule({
  declarations: [
    NelInputNumberComponent
  ],
  exports: [
    NelInputNumberComponent
  ],
  imports: [
    FormsModule
  ]
})

export class NelInputNumberModule { }
