import { Component, Input } from '@angular/core';

@Component({
  selector: 'nel-check-tag',
  templateUrl: './check-tag.component.html',
  host: {
    '[class]': `'el-check-tag'`,
    '[class.is-checked]': 'nelChecked'
  }
})

export class NelCheckTagComponent {
  @Input() nelChecked = false;
}
