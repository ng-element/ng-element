import { Component, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, timer } from 'rxjs';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
    selector: 'nel-demo-switch-before',
    template: `
    <nel-switch [(ngModel)]="value1" [nelLoading]="loading1" [nelBeforeChange]="beforeChange1"></nel-switch>
    <nel-switch [(ngModel)]="value2" [nelLoading]="loading2" [nelBeforeChange]="beforeChange2"></nel-switch>
  `,
    styles: [
        `
      :host ::ng-deep .el-switch {
        margin: 20px 20px 20px 0;
      }
    `
    ],
    standalone: false
})

export class NelDemoSwitchBeforeComponent implements OnDestroy {
  value1 = true;
  value2 = false;
  loading1 = false;
  loading2 = false;
  switchBeforeSub1?: Subscription;
  switchBeforeSub2?: Subscription;

  constructor(
    private message: NelMessageService
  ) { }

  ngOnDestroy(): void {
    if (this.switchBeforeSub1) {
      this.switchBeforeSub1.unsubscribe();
    }
    if (this.switchBeforeSub2) {
      this.switchBeforeSub2.unsubscribe();
    }
  }

  beforeChange1 = (): Observable<boolean> => {
    return new Observable((observer: Observer<boolean>) => {
      this.loading1 = true;
      this.switchBeforeSub1 = timer(1000).subscribe(() => {
        this.loading1 = false;
        this.message.success('切换成功');
        observer.next(true);
        observer.complete();
      });
      return this.switchBeforeSub1;
    });
  }

  beforeChange2 = (): Observable<boolean> => {
    return new Observable((observer: Observer<boolean>) => {
      this.loading2 = true;
      this.switchBeforeSub2 = timer(1000).subscribe(() => {
        this.loading2 = false;
        this.message.error('切换失败');
        observer.next(false);
        observer.complete();
      });
      return this.switchBeforeSub2;
    });
  }
}
