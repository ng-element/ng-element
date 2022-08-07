import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelUploadComponent } from './upload.component';

@NgModule({
  declarations: [
    NelUploadComponent
  ],
  exports: [
    NelUploadComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelUploadModule { }
