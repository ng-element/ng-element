import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-card-image',
    template: `
    <div nel-row>
      <div nel-col *ngFor="let card of cardList; let index=index" [nelSpan]="8" [nelOffset]="index > 0 ? 2 : 0">
        <nel-card [nelBodyStyle]="{padding: '0px'}">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom">
              <time class="time">"2021-05-07T06:41:24.246Z"</time>
              <button nel-button [nelType]="'text'" class="button">操作按钮</button>
            </div>
          </div>
        </nel-card>
      </div>
    </div>
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
    ],
    standalone: false
})

export class NelDemoCardImageComponent {
  cardList = [0, 1];
}
