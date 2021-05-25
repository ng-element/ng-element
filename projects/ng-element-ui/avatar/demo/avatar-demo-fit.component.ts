import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-avatar-fit',
  template: `
    <div class="demo-fit">
      <div class="block" *ngFor="let fit of fits">
          <span class="title">{{ fit }}</span>
          <nel-avatar [nelShape]="'square'" [nelSize]="100" [nelFit]="fit" [nelSrc]="url"></nel-avatar>
      </div>
    </div>
  `,
  styles: [
    `
      .demo-fit {
        display: flex;
        text-align: center;
        justify-content: space-between;
      }

      .demo-fit .block {
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-grow: 0;
      }

      .demo-fit .title {
        margin-bottom: 10px;
        font-size: 14px;
        color: #8492a6;
      }
    `
  ]
})

export class NelDemoAvatarFitComponent {
  fits = ['fill', 'contain', 'cover', 'none', 'scale-down'];
  url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
}
