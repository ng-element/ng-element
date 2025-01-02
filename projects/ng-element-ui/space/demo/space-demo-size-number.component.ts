import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-space-size-number',
    template: `
    <div>
      <button (click)="reduce()" nel-button>递减</button>
      {{size}}
      <button (click)="increase()" nel-button>递增</button>
    </div>
    <nel-space nelWrap [nelSize]="size">
      <ng-container *ngFor="let i of list">
        <nel-card *nelSpaceItem class="box-card" style="width: 250px" [nelHeader]="header">
          <ng-template #header>
            <div class="card-header">
              <span>Card name</span>
              <button nel-button class="button" [nelType]="'text'">Operation button</button>
            </div>
          </ng-template>
          <div *ngFor="let o of list" class="text item">
            {{ 'List item ' + o }}
          </div>
        </nel-card>
      </ng-container>
    </nel-space>
  `,
    styles: [
        `
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `
    ],
    standalone: false
})

export class NelDemoSpaceSizeNumberComponent {
  list = [1, 2, 3];
  size = 20;

  reduce(): void {
    const size = this.size - 10;
    if (size < 0) {
      this.size = 0;
    } else {
      this.size = size;
    }
  }

  increase(): void {
    const size = this.size + 10;
    if (size > 100) {
      this.size = 100;
    } else {
      this.size = size;
    }
  }
}
