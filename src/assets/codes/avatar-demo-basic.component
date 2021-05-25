import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-avatar-basic',
  template: `
    <div nel-row class="demo-avatar demo-basic">
      <div nel-col [nelSpan]="12">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block"><nel-avatar [nelSize]="50" [nelSrc]="circleUrl"></nel-avatar></div>
          <div class="block" *ngFor="let size of sizeList">
            <nel-avatar [nelSize]="size" [nelSrc]="circleUrl"></nel-avatar>
          </div>
        </div>
      </div>
      <div nel-col [nelSpan]="12">
        <div class="sub-title">square</div>
        <div class="demo-basic--circle">
          <div class="block"><nel-avatar [nelShape]="'square'" [nelSize]="50" [nelSrc]="squareUrl"></nel-avatar></div>
          <div class="block" *ngFor="let size of sizeList">
            <nel-avatar [nelShape]="'square'" [nelSize]="size" [nelSrc]="squareUrl"></nel-avatar>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .demo-avatar.demo-basic {
        text-align: center;
      }

      .demo-avatar .el-col:not(:last-child) {
        border-right: 1px solid rgba(224,230,237,.5);
      }

      .demo-avatar .sub-title {
        margin-bottom: 10px;
        font-size: 14px;
        color: #8492a6;
      }

      .demo-avatar.demo-basic .demo-basic--circle, .demo-avatar.demo-basic .demo-basic--square {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .demo-avatar.demo-basic .demo-basic--circle .block:not(:last-child), .demo-avatar.demo-basic .demo-basic--square .block:not(:last-child) {
        border-right: 1px solid rgba(224,230,237,.5);
      }

      .demo-avatar.demo-basic .demo-basic--circle .block, .demo-avatar.demo-basic .demo-basic--square .block {
        flex: 1;
      }
    `
  ]
})

export class NelDemoAvatarBasicComponent {
  circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
  squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png';
  sizeList = ['large', 'medium', 'small'];
}
