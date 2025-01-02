import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nel-demo-scrollbar-basic',
    template: `
    <nel-scrollbar [nelHeight]="'400px'">
      <p class="item" *ngFor="let item of list" v-for="item in 20">
        {{ item.value }}
      </p>
    </nel-scrollbar>
  `,
    styles: [
        `
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
    ],
    standalone: false
})

export class NelDemoScrollbarBasicComponent implements OnInit {
  list: any[] = [];

  ngOnInit(): void {
    for (let i = 1; i < 21; i++) {
      this.list.push({ value: i });
    }
  }
}
