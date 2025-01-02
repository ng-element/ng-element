import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-card-basic',
    template: `
    <nel-card [nelHeader]="headerTpl">
      <ng-template #headerTpl>
        <div class="card-header">
          <span>卡片名称</span>
          <button nel-button class="button" [nelType]="'text'">操作按钮</button>
        </div>
      </ng-template>
      <div *ngFor="let item of list" class="text item">
        {{'列表内容 ' + item }}
      </div>
    </nel-card>
  `,
    styles: [
        `
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .text {
        font-size: 14px;
      }

      .item {
        margin-bottom: 18px;
      }

      .box-card {
        width: 480px;
      }
    `
    ],
    standalone: false
})

export class NelDemoCardBasicComponent {
  list = [0, 1, 2, 1];
}
