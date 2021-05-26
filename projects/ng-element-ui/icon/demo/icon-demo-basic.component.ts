import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-icon-basic',
  template: `
    <span class="icons">
      <i class="el-icon-edit"></i>
      <i nel-icon [nelType]="'share'"></i>
      <i nel-icon [nelType]="'delete'"></i>
    </span>
  `
})

export class NelDemoIconBasicComponent { }
