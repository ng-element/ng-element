import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-skeleton-loading',
  template: `
    <nel-space [nelDirection]="'vertical'" [nelAlignment]="'flex-start'">
      <div (click)="loading = !loading">
        <label style="margin-right: 16px;">切换 Loading {{loading}}</label>
      </div>
      <nel-skeleton style="width: 240px" [nelLoading]="loading" nelAnimated [nelTemplate]="template">
        <ng-template #template>
          <nel-skeleton-item
          [nelVariant]="'image'"
            style="width: 240px; height: 240px;"
          ></nel-skeleton-item>
          <div style="padding: 14px;">
            <nel-skeleton-item [nelVariant]="'h3'" style="width: 50%;"></nel-skeleton-item>
            <div
              style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
            >
              <nel-skeleton-item [nelVariant]="'text'" style="margin-right: 16px;"></nel-skeleton-item>
              <nel-skeleton-item [nelVariant]="'text'" style="width: 30%;"></nel-skeleton-item>
            </div>
          </div>
        </ng-template>
        <nel-card [nelBodyStyle]="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom card-header">
              <span class="time">2020-20-20</span>
              <button nel-button [nelType]="'text'" class="button">操作按钮</button>
            </div>
          </div>
        </nel-card>
      </nel-skeleton>
    </nel-space>
  `,
  styles: [
    `
      .time {
        font-size: 13px;
        color: #999;
      }

      .bottom {
        margin-top: 13px;
        line-height: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .button {
        padding: 0;
        min-height: auto;
      }

      .image {
        width: 100%;
        display: block;
      }
    `
  ]
})

export class NelDemoSkeletonLoadingComponent {
  loading = true;
}
