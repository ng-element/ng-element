import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-card-simple',
  template: `
    <nel-card>
      <div *ngFor="let item of list" class="text item">
        {{'列表内容 ' + item }}
      </div>
    </nel-card>
  `,
  styles: [`
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .box-card {
      width: 480px;
    }
  `]
})

export class NelDemoCardSimpleComponent {
  list = [0, 1, 2, 1];
}
