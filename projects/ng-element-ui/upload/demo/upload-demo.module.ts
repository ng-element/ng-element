import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelUploadModule } from 'ng-element-ui/upload';
import { NelDemoUploadBasicComponent } from './upload-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoUploadBasicComponent
  ],
  exports: [
    NelDemoUploadBasicComponent
  ],
  imports: [
    CommonModule,
    NelUploadModule
  ]
})

export class NelDemoUploadModule { }
