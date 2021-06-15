import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-dialog-center',
  template: `
    <button nel-button [nelType]="'text'" (click)="dialogVisible = true">
      点击打开 Dialog
    </button>
    <nel-dialog
      [nelTitle]="'提示'"
      [(nelVisible)]="dialogVisible"
      nelCenter
      width="30%"
      :before-close="handleClose"
      [nelFooter]="footer">
      <span>这是一段信息</span>
      <ng-template #footer>
        <span class="dialog-footer">
          <button nel-button (click)="dialogVisible = false">取消</button>
          <button nel-button [nelType]="'primary'" (click)="dialogVisible = false">确定</button>
        </span>
      </ng-template>
    </nel-dialog>
  `
})

export class NelDemoDialogCenterComponent {
  dialogVisible = false;
}
