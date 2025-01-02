import { Component, Input, TemplateRef } from '@angular/core';
import { StatusType } from './steps.component';

@Component({
    selector: 'nel-step',
    templateUrl: './step.component.html',
    host: {
        class: 'el-step',
        '[class.is-horizontal]': `!simple && direction == 'horizontal'`,
        '[class.is-vertical]': `!simple && direction == 'vertical'`,
        '[class.is-simple]': 'simple',
        '[class.is-flex]': 'last && !alignCenter',
        '[class.is-center]': 'alignCenter',
        '[style.max-width]': `last ? space : ''`,
        '[style.flex-basis]': 'space'
    },
    standalone: false
})

export class NelStepComponent {
  @Input() nelTitle?: string | TemplateRef<void>;
  @Input() nelDescription?: string | TemplateRef<void>;
  @Input() nelIcon?: string;
  index!: number;
  active!: number;
  space!: string;
  finishStatus!: StatusType;
  alignCenter = false;
  direction!: string;
  simple = false;
  last = false;
}
