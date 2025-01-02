import { Component, Input } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';

@Component({
    selector: 'nel-check-tag',
    templateUrl: './check-tag.component.html',
    host: {
        '[class]': `'el-check-tag'`,
        '[class.is-checked]': 'nelChecked'
    },
    standalone: false
})

export class NelCheckTagComponent {
  static ngAcceptInputType_nelChecked: BooleanInput;

  @Input() @InputBoolean() nelChecked = false;
}
