import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';
import { NelRadioService } from './radio.service';

export type SizeType = 'medium' | 'small' | 'mini';

@Component({
  selector: '[nel-radio]',
  templateUrl: './radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NelRadioComponent),
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

export class NelRadioComponent implements ControlValueAccessor {
  static ngAcceptInputType_nelBorder: BooleanInput;
  static ngAcceptInputType_nelDisabled: BooleanInput;

  isChecked = false;
  @Input() nelValue: any;
  @Input() @InputBoolean() nelDisabled = false;
  @Input() @InputBoolean() nelBorder = false;
  @Input() nelSize: SizeType | undefined;
  data: any;
  change = (value: any) => { };

  constructor(
    @Optional() private radio: NelRadioService,
    private cdr: ChangeDetectorRef
  ) { }

  onHostClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    if (!this.nelDisabled) {
      this.data = this.nelValue;
      this.isChecked = this.data === this.nelValue;
      this.change(this.nelValue);
      if (this.radio) {
        this.radio.select(this.nelValue);
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
