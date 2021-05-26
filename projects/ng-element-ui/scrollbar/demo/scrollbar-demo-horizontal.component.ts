import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nel-demo-scrollbar-horizontal',
  template: `
    <nel-scrollbar>
      <div class="flex-content">
        <p class="item" *ngFor="let item of list">{{ item.value }}</p>
      </div>
    </nel-scrollbar>
  `,
  styles: [
    `
      .flex-content {
        display: flex;
      }

      .flex-content .item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: #fef0f0;
        color: #f56c6c;
      }
    `
  ]
})

export class NelDemoScrollbarHorizontalComponent implements OnInit {
  list: any[] = [];

  ngOnInit(): void {
    for (let i = 1; i < 51; i++) {
      this.list.push({ value: i });
    }
  }
}
