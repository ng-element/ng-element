import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-space-alignment',
  template: `
    <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
      <nel-space>
        <div *nelSpaceItem>string</div>
        <button *nelSpaceItem nel-button>
          button
        </button>
        <nel-card *nelSpaceItem [nelHeader]="header">
          <ng-template #header>
            header
          </ng-template>
          body
        </nel-card>
      </nel-space>
    </div>
    <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
      <nel-space [nelAlignment]="'flex-start'">
        <div *nelSpaceItem>string</div>
        <button *nelSpaceItem nel-button>
          button
        </button>
        <nel-card *nelSpaceItem [nelHeader]="header">
          <ng-template #header>
            header
          </ng-template>
          body
        </nel-card>
      </nel-space>
    </div>
    <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
      <nel-space [nelAlignment]="'flex-end'">
        <div *nelSpaceItem>string</div>
        <button *nelSpaceItem nel-button>
          button
        </button>
        <nel-card *nelSpaceItem [nelHeader]="header">
          <ng-template #header>
            header
          </ng-template>
          body
        </nel-card>
      </nel-space>
    </div>
  `
})

export class NelDemoSpaceAlignmentComponent { }
