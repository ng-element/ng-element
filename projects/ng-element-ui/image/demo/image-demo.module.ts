import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelImageModule } from 'ng-element-ui/image';
import { NelButtonModule } from 'ng-element-ui/button';
import { DemoImageBasicComponent } from './image-demo-basic.component';
import { DemoImagePlaceholderComponent } from './image-demo-placeholder.component';
import { DemoImageErrorComponent } from './image-demo-error.component';
import { DemoImageLazyComponent } from './image-demo-lazy.component';
import { DemoImageViewerComponent } from './image-demo-viewer.component';
import { DemoImageServiceComponent } from './image-demo-service.component';

@NgModule({
  declarations: [
    DemoImageBasicComponent,
    DemoImagePlaceholderComponent,
    DemoImageErrorComponent,
    DemoImageLazyComponent,
    DemoImageViewerComponent,
    DemoImageServiceComponent
  ],
  exports: [
    DemoImageBasicComponent,
    DemoImagePlaceholderComponent,
    DemoImageErrorComponent,
    DemoImageLazyComponent,
    DemoImageViewerComponent,
    DemoImageServiceComponent
  ],
  imports: [
    CommonModule,
    NelImageModule,
    NelButtonModule
  ]
})

export class NelDemoImageModule { }
