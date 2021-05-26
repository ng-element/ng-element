import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelImageModule } from 'ng-element-ui/image';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoImageBasicComponent } from './image-demo-basic.component';
import { NelDemoImagePlaceholderComponent } from './image-demo-placeholder.component';
import { NelDemoImageErrorComponent } from './image-demo-error.component';
import { NelDemoImageLazyComponent } from './image-demo-lazy.component';
import { NelDemoImageViewerComponent } from './image-demo-viewer.component';
import { NelDemoImageServiceComponent } from './image-demo-service.component';

@NgModule({
  declarations: [
    NelDemoImageBasicComponent,
    NelDemoImagePlaceholderComponent,
    NelDemoImageErrorComponent,
    NelDemoImageLazyComponent,
    NelDemoImageViewerComponent,
    NelDemoImageServiceComponent
  ],
  exports: [
    NelDemoImageBasicComponent,
    NelDemoImagePlaceholderComponent,
    NelDemoImageErrorComponent,
    NelDemoImageLazyComponent,
    NelDemoImageViewerComponent,
    NelDemoImageServiceComponent
  ],
  imports: [
    CommonModule,
    NelImageModule,
    NelButtonModule
  ]
})

export class NelDemoImageModule { }
