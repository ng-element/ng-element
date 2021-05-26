import { Component } from '@angular/core';
import { NelImageService } from 'ng-element-ui/image';

@Component({
  selector: 'nel-demo-image-viewer',
  template: `
    <div class="demo-image__preview">
      <nel-image
        style="width: 100px; height: 100px"
        [nelSrc]="url"
        [nelPreviewSrcList]="srcList">
      </nel-image>
    </div>
  `
})

export class NelDemoImageViewerComponent {
  url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
  srcList = [
    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
  ];
}
