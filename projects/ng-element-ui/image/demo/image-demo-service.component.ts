import { Component } from '@angular/core';
import { NelImageService } from 'ng-element-ui/image';

@Component({
    selector: 'nel-demo-image-service',
    template: `
    <button nel-button (click)="preview()">查看图片</button>
  `,
    standalone: false
})

export class NelDemoImageServiceComponent {
  constructor(
    private image: NelImageService
  ) { }

  preview(): void {
    this.image.preview({
      nelUrlList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      nelInitialIndex: 0,
      nelOnClose: () => {
        console.log('onClose');
      },
      nelOnSwitch: (item: number) => {
        console.log(item);
      }
    });
  }
}
