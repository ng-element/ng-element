import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { ImageComponent } from './image.component';
import { ImageViewerComponent } from './image-viewer.component';
import { NelImageService } from './image.service';

@NgModule({
  declarations: [
    ImageComponent,
    ImageViewerComponent
  ],
  exports: [
    ImageComponent,
    ImageViewerComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    DragDropModule,
    NelOutletModule
  ],
  providers: [
    NelImageService
  ]
})

export class NelImageModule { }
