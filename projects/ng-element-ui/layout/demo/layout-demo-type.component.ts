import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-layout-type',
  template: `
    <div nel-row [nelType]="'flex'" class="row-bg">
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple-light"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
    </div>
    <div nel-row [nelType]="'flex'" class="row-bg" [nelJustify]="'center'">
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple-light"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
    </div>
    <div nel-row [nelType]="'flex'" class="row-bg" [nelJustify]="'end'">
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple-light"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
    </div>
    <div nel-row [nelType]="'flex'" class="row-bg" [nelJustify]="'space-between'">
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple-light"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
    </div>
    <div nel-row [nelType]="'flex'" class="row-bg" [nelJustify]="'space-around'">
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple-light"></div></div>
      <div nel-col [nelSpan]="6"><div class="grid-content bg-purple"></div></div>
    </div>
  `,
  styles: [`
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  `]
})

export class NelDemoLayoutTypeComponent { }
