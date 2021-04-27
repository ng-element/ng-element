import { Component } from '@angular/core';

@Component({
  selector: 'nel-button-group',
  template: `
  <div class="el-button-group">
    <ng-content></ng-content>
  </div>
  `
})

export class ButtonGroupComponent { }
