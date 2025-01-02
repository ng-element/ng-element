import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-space-spacer',
    template: `
    <div>
      <nel-space [nelSize]="size" [nelSpacer]="'|'">
        <ng-container *ngFor="let i of list">
          <div *nelSpaceItem>
            <button nel-button>
              button {{ i }}
            </button>
          </div>
        </ng-container>
      </nel-space>
    </div>
    <div style="margin-top: 10px;">
      <nel-space [nelSize]="size" [nelSpacer]="spacer">
        <ng-container *ngFor="let i of list">
          <div *nelSpaceItem>
            <button nel-button>
              button {{ i }}
            </button>
          </div>
        </ng-container>
      </nel-space>
      <ng-template #spacer>
        <nel-divider [nelDirection]="'vertical'"></nel-divider>
      </ng-template>
    </div>
  `,
    standalone: false
})

export class NelDemoSpaceSpacerComponent {
  size = 10;
  list = [1, 2];
}
