import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { NelDialogService } from 'ng-element-ui/dialog';

@Component({
    selector: 'nel-demo-drawer-content',
    template: `
    <button nel-button [nelType]="'text'" (click)="table = true">打开嵌套表格的 Drawer</button>
    <button nel-button [nelType]="'text'" (click)="dialog = true">打开嵌套 Form 的 Drawer</button>
    <nel-drawer
      [nelTitle]="'我嵌套了表格!'"
      [(nelVisible)]="table"
      [nelDirection]="'rtl'"
      [nelSize]="'50%'">
      这是一个表格，待开发...
    </nel-drawer>

    <nel-drawer
      [nelTitle]="'我嵌套了 Form !'"
      [nelBeforeClose]="beforeClose"
      [(nelVisible)]="dialog"
      [nelDirection]="'ltr'"
      custom-class="demo-drawer"
      >
      <div class="demo-drawer__content">
        <div class="form">
          这是一个表单，待开发...
        </div>
        <div class="demo-drawer__footer">
          <button nel-button (click)="cancelForm()">取 消</button>
          <button nel-button [nelType]="'primary'" (click)="closeDrawer()" [nelLoading]="loading">{{ loading ? '提交中 ...' : '确 定' }}</button>
        </div>
      </div>
    </nel-drawer>
  `,
    styles: [
        `
      .demo-drawer__content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .demo-drawer__content .form {
        flex: 1;
      }

      .demo-drawer__footer {
        display: flex;
      }

      .demo-drawer__footer button {
        flex: 1;
      }
    `
    ],
    standalone: false
})

export class NelDemoDrawerContentComponent {
  table = false;
  dialog = false;
  loading = false;

  constructor(
    private dialogService: NelDialogService
  ) { }

  cancelForm(): void {
    this.dialog = false;
  }

  closeDrawer(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.dialog = false;
    }, 2000);
  }

  beforeClose = (): Observable<boolean> => {
    return new Observable((observer: Observer<boolean>) => {
      this.dialogService.confirm({
        nelContent: '确定要提交表单吗？',
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
