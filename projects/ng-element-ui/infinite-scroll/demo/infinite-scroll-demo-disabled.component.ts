import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nel-demo-infinite-scroll-disabled',
  template: `
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul
        class="list"
        nel-infinite-scroll
        [nelDisabled]="disabled()"
        (nelOnReachBottom)="load()" style="color: blue;">
        <li *ngFor="let item of list" class="list-item">{{item}}</li>
      </ul>
      <p *ngIf="loading">加载中...</p>
      <p *ngIf="noMore()">没有更多了</p>
    </div>
  `,
  styles: [
    `
      .infinite-list-wrapper {
        height: 300px;
        text-align: center;
      }

      .infinite-list-wrapper .list {
        padding: 0;
        margin: 0;
        list-style: none;
        color: red;
      }

      .infinite-list-wrapper .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #fff6f6;
        color: #ff8484;
      }

      .infinite-list-wrapper .list-item+.list-item {
        margin-top: 10px;
      }
    `
  ]
})

export class NelDemoInfiniteScrollDisabledComponent implements OnInit {
  list: number[] = [];
  loading = false;

  ngOnInit(): void {
    for (let i = 1; i < 11; i++) {
      this.list.push(i);
    }
  }

  disabled(): boolean {
    return this.loading || this.noMore();
  }

  noMore(): boolean {
    return this.list.length >= 20;
  }

  load(): void {
    this.loading = true;
    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        this.list.push(this.list.length + 1);
      }
      this.loading = false;
    }, 2000);
  }
}
