import { Component, Input } from '@angular/core';

@Component({
  selector: 'nel-date-picker',
  templateUrl: './date-picker.component.html'
})

export class NelDatePickerComponent {
  @Input() type: 'date' | 'datetime' = 'date';
}
