import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelImageComponent } from './image.component';
import { NelImageViewerComponent } from './image-viewer.component';
import { NelImageService } from './image.service';

@NgModule({
  declarations: [
    NelImageComponent,
    NelImageViewerComponent
  ],
  exports: [
    NelImageComponent,
    NelImageViewerComponent
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
