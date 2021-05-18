import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NzRadioService } from './radio.service';

export type SizeType = 'medium' | 'small' | 'mini';

@Component({
  selector: '[nel-radio]',
  templateUrl: './radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }],
  host: {
    '[class]': `'el-radio'`,
    '[class.is-checked]': 'isChecked',
    '[class.is-disabled]': 'nelDisabled',
    '[class.is-bordered]': 'nelBorder',
    '[class.el-radio--medium]': `nelSize == 'medium'`,
    '[class.el-radio--small]': `nelSize == 'small'`,
    '[class.el-radio--mini]': `nelSize == 'mini'`,
    '(click)': 'onHostClick($event)'
  }
})

export class RadioComponent implements ControlValueAccessor {
  isChecked = false;
  @Input() nelValue: any;
  @Input() nelDisabled = false;
  @Input() nelBorder = false;
  @Input() nelSize: SizeType | undefined;
  data: any;
  change = (value: any) => { };

  constructor(
    @Optional() private radioS: NzRadioService,
    private cdr: ChangeDetectorRef
  ) { }

  onHostClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    if (!this.nelDisabled) {
      this.data = this.nelValue;
      this.isChecked = this.data === this.nelValue;
      this.change(this.nelValue);
      if (this.radioS) {
        this.radioS.select(this.nelValue);
      }
    }
  }

  changeView(): void {
    this.cdr.detectChanges();
  }

  writeValue(val: any): void {
    this.data = val;
    this.isChecked = this.data === this.nelValue;
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
