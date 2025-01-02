import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-image-basic',
    template: `
    <div class="demo-image">
      <div class="block" *ngFor="let fit of fits">
        <span class="demonstration">{{ fit }}</span>
        <nel-image
          style="width: 100px; height: 100px"
          [nelSrc]="url"
          [nelFit]="fit"></nel-image>
      </div>
    </div>
  `,
    styles: [
        `
      .demo-image .block {
        padding: 30px 0;
        text-align: center;
        border-right: 1px solid #eff2f6;
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        vertical-align: top;
      }

      .demo-image .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
      }

      .demo-image .block:last-child {
        border-right: none;
      }
    `
    ],
    standalone: false
})

export class NelDemoImageBasicComponent {
  fits = ['fill', 'contain', 'cover', 'none', 'scale-down'];
  url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
}
