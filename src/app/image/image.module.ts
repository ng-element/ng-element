import { NgModule } from '@angular/core';
import { NelDemoImageModule } from './../../../projects/ng-element-ui/image/demo/image-demo.module';
import { SharedModule } from './../shared/shared.module';
import { ImageRoutingModule } from './image-routing.module';
import { ImageComponent } from './image.component';

@NgModule({
  declarations: [
    ImageComponent
  ],
  exports: [
    ImageComponent
  ],
  imports: [
    NelDemoImageModule,
    SharedModule,
    ImageRoutingModule
  ]
})

export class ImageModule { }
