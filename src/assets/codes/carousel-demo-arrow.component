import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-carousel-arrow',
    template: `
    <nel-carousel :interval="5000" [nelArrow]="'always'">
      <nel-carousel-item *ngFor="let item of list">
        <h3>{{ item }}</h3>
      </nel-carousel-item>
    </nel-carousel>
  `,
    styles: [
        `
      :host ::ng-deep .el-carousel__item:nth-child(odd) {
          background-color: #d3dce6;
        }

        :host ::ng-deep .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        :host ::ng-deep .el-carousel__item h3 {
          color: #fff;
          font-size: 18px;
          line-height: 300px;
          margin: 0;
          text-align: center;
        }
    `
    ],
    standalone: false
})

export class NelDemoCarouselArrowComponent {
  list = [1, 2, 3, 4];
}
