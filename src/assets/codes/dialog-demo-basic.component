import { Component } from '@angular/core';
import { NelDialogService } from 'ng-element-ui/dialog';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'nel-demo-dialog-basic',
  template: `
    <button nel-button [nelType]="'text'" (click)="dialogVisible = true">
      点击打开 Dialog
    </button>
    <nel-dialog
      [nelTitle]="'提示'"
      [(nelVisible)]="dialogVisible"
      width="30%"
      [nelFooter]="footer"
      [nelBeforeClose]="beforeClose">
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

export class NelDemoDialogBasicComponent {
  dialogVisible = false;

  constructor(
    private dialogService: NelDialogService
  ) { }

  beforeClose = (): Observable<boolean> => {
    return new Observable((observer: Observer<boolean>) => {
      this.dialogService.confirm({
        nelContent: '确认关闭？',
        nelOnCancel: () => {
          observer.next(false);
          observer.complete();
        },
        nelOnOk: () => {
          observer.next(true);
          observer.complete();
        }
      });
    });
  }
}
