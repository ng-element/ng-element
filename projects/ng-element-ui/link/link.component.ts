import { Component, Input } from '@angular/core';

@Component({
  selector: 'a[nel-link]',
  template: `
    <i *ngIf="nelIcon" nel-icon [nelType]="nelIcon"></i>
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
  }
})

export class NelLinkComponent {
  @Input() nelType = '';
  @Input() nelUnderline = true;
  @Input() nelDisabled = false;
  @Input() nelIcon = '';
}
