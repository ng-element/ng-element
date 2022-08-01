import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NelSelectModule } from 'ng-element-ui/select';
import { NelDemoSelectBasicComponent } from './select-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoSelectBasicComponent
  ],
  exports: [
    NelDemoSelectBasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NelSelectModule
  ]
})

export class NelDemoSelectModule { }
