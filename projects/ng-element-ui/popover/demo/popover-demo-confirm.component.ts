import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-popover-confirm',
  template: `
  <button nel-button
    nel-popover
    [nelPopoverContent]="contentTpl"
    [nelPopoverPlacement]="'top'"
    [nelPopoverWidth]="160"
    [(nelPopoverVisible)]="visible"
  >删除
  </button>
  <ng-template #contentTpl>
    <p>这是一段内容这是一段内容确定删除吗？</p>
    <div style="text-align: right; margin: 0">
      <button nel-button [nelSize]="'mini'" [nelType]="'text'" (click)="visible = false">取消</button>
      <button nel-button [nelType]="'primary'" [nelSize]="'mini'" (click)="visible = false">确定</button>
    </div>
  </ng-template>
  `
})

export class NelDemoPopoverConfirmComponent {
  visible = false;
}
