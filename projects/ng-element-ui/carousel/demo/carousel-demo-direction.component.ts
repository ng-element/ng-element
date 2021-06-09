import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-carousel-direction',
  template: `
    <nel-carousel [nelHeight]="'200px'" [nelDirection]="'vertical'" :autoplay="false">
      <nel-carousel-item *ngFor="let item of list">
        <h3 class="medium">{{ item }}</h3>
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

        :host ::ng-deep .el-carousel__item h3.medium {
          font-size: 14px;
          line-height: 200px;
        }
    `
  ]
})

export class NelDemoCarouselDirectionComponent {
  list = [1, 2, 3];
}
