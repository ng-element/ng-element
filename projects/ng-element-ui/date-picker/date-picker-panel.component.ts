import { Component } from '@angular/core';

@Component({
  selector: 'nel-date-picker-panel',
  templateUrl: './date-picker-panel.component.html',
  host: {
    'class': 'el-popper is-pure is-light el-picker__popper',
    'tabindex': '-1',
    'role': 'dialog'
  }
})

export class NelDatePickerPanelComponent { }
