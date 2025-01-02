import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-layout-basic',
    template: `
    <div nel-row>
      <div nel-col [nelSpan]="24">
        <div class="grid-content bg-purple-dark"></div>
      </div>
    </div>
    <div nel-row>
      <div nel-col [nelSpan]="12">
        <div class="grid-content bg-purple"></div>
      </div>
      <div nel-col [nelSpan]="12">
        <div class="grid-content bg-purple-light"></div>
      </div>
    </div>
    <div nel-row>
      <div nel-col [nelSpan]="8">
        <div class="grid-content bg-purple"></div>
      </div>
      <div nel-col [nelSpan]="8">
        <div class="grid-content bg-purple-light"></div>
      </div>
      <div nel-col [nelSpan]="8">
        <div class="grid-content bg-purple"></div>
      </div>
    </div>
    <div nel-row>
      <div nel-col [nelSpan]="6">
        <div class="grid-content bg-purple"></div>
      </div>
      <div nel-col [nelSpan]="6">
        <div class="grid-content bg-purple-light"></div>
      </div>
      <div nel-col [nelSpan]="6">
        <div class="grid-content bg-purple"></div>
      </div>
      <div nel-col [nelSpan]="6">
        <div class="grid-content bg-purple-light"></div>
      </div>
    </div>
    <div nel-row>
      <div nel-col [nelSpan]="4">
        <div class="grid-content bg-purple"></div>
      </div>
      <div nel-col [nelSpan]="4">
        <div class="grid-content bg-purple-light"></div>
      </div>
      <div nel-col [nelSpan]="4">
        <div class="grid-content bg-purple"></div>
      </div>
      <div nel-col [nelSpan]="4">
        <div class="grid-content bg-purple-light"></div>
      </div>
      <div nel-col [nelSpan]="4">
        <div class="grid-content bg-purple"></div>
      </div>
      <div nel-col [nelSpan]="4">
        <div class="grid-content bg-purple-light"></div>
      </div>
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
  `],
    standalone: false
})

export class NelDemoLayoutBasicComponent { }
