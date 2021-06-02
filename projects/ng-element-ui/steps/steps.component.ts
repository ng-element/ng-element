import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { NelStepComponent } from './step.component';

export type StatusType = 'wait' | 'process' | 'finish' | 'error' | 'success';

@Component({
  selector: 'nel-steps',
  templateUrl: './steps.component.html',
  host: {
    class: 'el-steps',
    '[class.el-steps--horizontal]': `!nelSimple && nelDirection == 'horizontal'`,
    '[class.el-steps--vertical]': `!nelSimple && nelDirection == 'vertical'`,
    '[class.el-steps--simple]': 'nelSimple',
  }
})

export class NelStepsComponent implements AfterContentInit {
  initStatus = false;
  active = 0;
  @Input() nelSpace?: number | string;
  @Input() nelFinishStatus: StatusType = 'finish';
  @Input() nelAlignCenter = false;
  @Input() nelDirection: 'vertical' | 'horizontal' = 'horizontal';
  @Input() nelSimple = false;
  @Input() set nelActive(val: number) {
    this.active = val;
    if (this.initStatus) {
      this.changeActive();
    }
  }
  @ContentChildren(NelStepComponent, { descendants: false }) stepList!: QueryList<NelStepComponent>;

  ngAfterContentInit(): void {
    const lastStep = this.stepList.last;
    lastStep.last = true;
    this.changeActive();
    this.initStatus = true;
  }

  changeActive(): void {
    const stepLength = this.stepList.length;
    let space = '';
    if (this.nelAlignCenter) {
      space = 100 / stepLength + '%';
    } else {
      space = 100 / (stepLength - 1) + '%';
    }
    this.stepList.forEach((item, index) => {
      if (!item.index) {
        item.index = index;
      }
      item.active = this.active;
      item.finishStatus = this.nelFinishStatus;
      item.alignCenter = this.nelAlignCenter;
      item.direction = this.nelDirection;
      item.simple = this.nelSimple;
      if (this.nelSpace) {
        item.space = typeof this.nelSpace === 'number' ? this.nelSpace + 'px' : this.nelSpace;
      } else {
        item.space = space;
      }
    });
  }
}
