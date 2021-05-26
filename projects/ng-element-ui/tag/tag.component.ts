import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nel-tag',
  templateUrl: './tag.component.html',
  host: {
    '[class]': `'el-tag'`,
    '[class.el-tag--success]': `nelType == 'success'`,
    '[class.el-tag--info]': `nelType == 'info'`,
    '[class.el-tag--warning]': `nelType == 'warning'`,
    '[class.el-tag--danger]': `nelType == 'danger'`,
    '[class.el-tag--medium]': `nelSize == 'medium'`,
    '[class.el-tag--small]': `nelSize == 'small'`,
    '[class.el-tag--mini]': `nelSize == 'mini'`,
    '[class.el-tag--dark]': `nelEffect == 'dark'`,
    '[class.el-tag--light]': `nelEffect == 'light'`,
    '[class.el-tag--plain]': `nelEffect == 'plain'`,
  }
})

export class NelTagComponent {
  @Input() nelType?: 'success' | 'info' | 'warning' | 'danger' | string;
  @Input() nelClosable = false;
  @Input() nelSize?: 'medium' | 'small' | 'mini';
  @Input() nelEffect: 'dark' | 'light' | 'plain' = 'light';
  @Output() nelOnClose: EventEmitter<void> = new EventEmitter<void>();

  close(): void {
    this.nelOnClose.emit();
  }
}
