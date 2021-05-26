import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nel-demo-scrollbar-maxheight',
  template: `
    <button nel-button (click)="add()">添加元素</button>
    <button nel-button (click)="delete()">删除元素</button>
    <nel-scrollbar [nelMaxHeight]="'400px'">
      <p class="item" *ngFor="let item of list; let index=index">{{ index+1 }}</p>
    </nel-scrollbar>
  `,
  styles: [
    `
    .el-button {
      margin-bottom: 20px;
    }
    :host ::ng-deep .item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      margin: 10px;
      text-align: center;
      border-radius: 4px;
      background: #ecf5ff;
      color: #409eff;
    }
    `
  ]
})

export class NelDemoScrollbarMaxheightComponent implements OnInit {
  count = 3;
  list: any[] = [];

  ngOnInit(): void {
    for (let i = 1; i < 4; i++) {
      this.list.push(i);
    }
  }

  add(): void {
    this.count++;
    this.list.push(this.count);
  }
  delete(): void {
    if (this.list.length > 0) {
      this.list.pop();
    }
  }
}
