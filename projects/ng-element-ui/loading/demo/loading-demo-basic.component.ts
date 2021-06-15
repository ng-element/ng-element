import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-loading-basic',
  template: `
    <nel-loading>
      <div class="table">
        table区域，待开发中...
      </div>
    </nel-loading>
  `,
  styles: [
    `
      .table {
        height: 192px;
      }
    `
  ]
})

export class NelDemoLoadingBasicComponent { }
