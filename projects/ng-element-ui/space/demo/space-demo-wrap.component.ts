import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nel-demo-space-wrap',
    template: `
    <nel-space nelWrap>
      <ng-container *ngFor="let i of list">
        <div *nelSpaceItem>
          <button nel-button [nelType]="'text'">
            文字按钮
          </button>
        </div>
      </ng-container>
    </nel-space>
  `,
    standalone: false
})

export class NelDemoSpaceWrapComponent implements OnInit {
  list: number[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push(i);
    }
  }
}
