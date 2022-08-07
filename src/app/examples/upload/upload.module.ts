import { NgModule } from '@angular/core';
import { NelDemoUploadModule } from '../../../../projects/ng-element-ui/upload/demo/upload-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';

@NgModule({
  declarations: [
    UploadComponent
  ],
  exports: [
    UploadComponent
  ],
  imports: [
    NelDemoUploadModule,
    SharedModule,
    UploadRoutingModule
  ]
})

export class UploadModule { }
