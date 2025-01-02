import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-carousel-basic',
    template: `
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <nel-carousel [nelHeight]="'150px'">
        <nel-carousel-item *ngFor="let item of list">
          <h3 class="small">{{ item }}</h3>
        </nel-carousel-item>
      </nel-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <nel-carousel [nelTrigger]="'click'" [nelHeight]="'150px'">
        <nel-carousel-item *ngFor="let item of list">
          <h3 class="small">{{ item }}</h3>
        </nel-carousel-item>
      </nel-carousel>
    </div>
  `,
    styles: [
        `
      .block {
        padding: 30px;
        text-align: center;
        border-right: 1px solid #eff2f6;
        display: inline-block;
        width: 49%;
        box-sizing: border-box;
      }

      .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
      }

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
      }

      :host ::ng-deep .el-carousel__item h3.small {
        font-size: 14px;
        line-height: 150px;
      }
    `
    ],
    standalone: false
})

export class NelDemoCarouselBasicComponent {
  list = [1, 2, 3, 4];
}
