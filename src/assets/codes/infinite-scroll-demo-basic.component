import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-infinite-scroll-basic',
    template: `
    <ul class="infinite-list" nel-infinite-scroll (nelOnReachBottom)="add()" style="overflow:auto">
      <li *ngFor="let item of list" class="infinite-list-item">{{ item }}</li>
    </ul>
  `,
    styles: [
        `
      .infinite-list {
        height: 300px;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .infinite-list .infinite-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #e8f3fe;
        margin: 10px;
        color: #7dbcfc;
      }
    `
    ],
    standalone: false
})

export class NelDemoInfiniteScrollBasicComponent {
  list: number[] = [];

  add(): void {
    for (let i = 0; i < 2; i++) {
      this.list.push(this.list.length + 1);
    }
  }
}
