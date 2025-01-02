import { Component, Input } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';

@Component({
    selector: 'a[nel-link]',
    template: `
    <i *ngIf="nelIcon" class="el-icon-{{nelIcon}}"></i>
    <span class="el-link--inner">
      <ng-content></ng-content>
    </span>
  `,
    host: {
        '[class.el-link]': `true`,
        '[class.el-link--default]': `nelType == ''`,
        '[class.el-link--primary]': `nelType == 'primary'`,
        '[class.el-link--success]': `nelType == 'success'`,
        '[class.el-link--warning]': `nelType == 'warning'`,
        '[class.el-link--danger]': `nelType == 'danger'`,
        '[class.el-link--info]': `nelType == 'info'`,
        '[class.is-underline]': `nelUnderline && !nelDisabled`,
        '[class.is-disabled]': `nelDisabled`,
    },
    standalone: false
})

export class NelLinkComponent {
  static ngAcceptInputType_nelDisabled: BooleanInput;

  @Input() nelType = '';
  @Input() nelUnderline = true;
  @Input() @InputBoolean() nelDisabled = false;
  @Input() nelIcon = '';
}
