import { Component, Input, TemplateRef, OnDestroy } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';
import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'nel-skeleton',
    templateUrl: './skeleton.component.html',
    host: {
        class: 'el-skeleton',
        '[class.is-animated]': 'nelAnimated'
    },
    standalone: false
})

export class NelSkeletonComponent implements OnDestroy {
  static ngAcceptInputType_nelAnimated: BooleanInput;

  rowList = [0, 1, 2, 3];
  @Input() set nelRows(val: number) {
    const rowList = [];
    for (let i = 0; i <= val; i++) {
      rowList.push(i);
    }
    this.rowList = rowList;
  }
  @Input() @InputBoolean() nelAnimated = false;
  @Input() nelTemplate?: string | TemplateRef<void>;
  @Input() set nelLoading(val: boolean) {
    if (val) {
      if (this.nelThrottle) {
        this.timeoutHandle = setTimeout(() => {
          this.loading = val;
        }, this.nelThrottle);
      } else {
        this.loading = val;
      }
    } else {
      this.loading = val;
      if (this.timeoutHandle) {
        clearTimeout(this.timeoutHandle);
      }
    }
  }
  @Input() nelThrottle = 0;
  loading = true;
  subscribeChangeLoading!: Subscription;
  changeLoading$ = new Subject<any>();
  timeoutHandle: any;

  ngOnDestroy(): void {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }
  }
}
