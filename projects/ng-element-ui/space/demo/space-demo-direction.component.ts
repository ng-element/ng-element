import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-space-direction',
    template: `
    <nel-space [nelDirection]="'vertical'">
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

export class NelDemoSpaceDirectionComponent {
  list = [1, 2];
}
