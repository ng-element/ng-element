import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[nel-button]',
  template: `
    <i *ngIf="nelIcon" nel-icon [nelType]="nelIcon"></i>
    <i *ngIf="nelLoading" nel-icon [nelType]="'loading'"></i>
    <span>
      <ng-content></ng-content>
    </span>
  `,
  host: {
    '[class.el-button]': `true`,
    '[class.el-button--primary]': `nelType === 'primary'`,
    '[class.el-button--success]': `nelType === 'success'`,
    '[class.el-button--info]': `nelType === 'info'`,
    '[class.el-button--warning]': `nelType === 'warning'`,
    '[class.el-button--danger]': `nelType === 'danger'`,
    '[class.is-plain]': `nelPlain`,
    '[class.is-round]': `nelRound`,
    '[class.is-circle]': `nelCircle`,
    '[class.is-disabled]': `nelDisabled`,
    '[class.el-button--text]': `nelType === 'text'`,
    '[class.is-loading]': `nelLoading`,
    '[class.el-button--medium]': `nelSize === 'medium'`,
    '[class.el-button--small]': `nelSize === 'small'`,
    '[class.el-button--mini]': `nelSize === 'mini'`,
  }
})

export class ButtonComponent {
  @Input() nelType = '';
  @Input() nelPlain = false;
  @Input() nelRound = false;
  @Input() nelIcon = '';
  @Input() nelCircle = false;
  nelDisabled = false;
  @Input() set disabled(value: any) {
    if (value === '' || value) {
      this.nelDisabled = true;
    }
  }
  @Input() nelLoading = false;
  @Input() nelSize = '';

  constructor() { }
}
