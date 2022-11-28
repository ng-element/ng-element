import { Component } from '@angular/core';

@Component({
  selector: 'nel-time-select-panel',
  templateUrl: './time-select-panel.component.html',
  host: {
    'class': 'el-popper is-pure is-light el-select__popper',
    'tabindex': '-1',
    'role': 'tooltip'
  }
})

export class NelTimeSelectPanelComponent { }
