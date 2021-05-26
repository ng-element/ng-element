import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-image-placeholder',
  template: `
    <div class="demo-image__placeholder">
      <div class="block">
        <span class="demonstration">默认</span>
        <nel-image [nelSrc]="src"></nel-image>
      </div>
      <div class="block">
        <span class="demonstration">自定义</span>
        <nel-image [nelSrc]="src" [nelPlaceholder]="placeholder">
          <ng-template #placeholder>
            <div class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </ng-template>
        </nel-image>
      </div>
    </div>
  `,
  styles: [
    `
      .demo-image__placeholder .el-image {
        width: 300px;
        height: 200px;
      }

      .demo-image__placeholder .block {
        padding: 30px 0;
        text-align: center;
        border-right: 1px solid #eff2f6;
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        vertical-align: top;
      }

      .demo-image__placeholder .block {
        width: 49%;
      }

      .demo-image__placeholder .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
      }

      .demo-image__placeholder .block:last-child {
        border-right: none;
      }

      .demo-image__placeholder .image-slot {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #f5f7fa;
        color: #909399;
        font-size: 14px;
      }
      .demo-image__placeholder .dot {
        animation: dot 2s steps(3,start) infinite;
        overflow: hidden;
      }
    `
  ]
})

export class NelDemoImagePlaceholderComponent {
  src = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
}
