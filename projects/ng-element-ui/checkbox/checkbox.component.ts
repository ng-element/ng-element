import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';
import { NelCheckboxService } from './checkbox.service';

@Component({
  selector: '[nel-checkbox]',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'el-checkbox',
    '[class.is-checked]': 'isChecked',
    '[class.is-disabled]': 'nelDisabled',
    '(click)': 'onHostClick($event)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NelCheckboxComponent),
      multi: true
    }
  ]
})

export class NelCheckboxComponent implements ControlValueAccessor {
  static ngAcceptInputType_nelDisabled: BooleanInput;

  isChecked = false;
  @Input() nelValue: any;
  @Input() @InputBoolean() nelDisabled = false;
  @Input() nelIndeterminate = false;
  data: any;
  change = (val: any) => { };

  constructor(
    @Optional() private checkbox: NelCheckboxService,
    private cdr: ChangeDetectorRef
  ) { }

  onHostClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    if (!this.nelDisabled) {
      this.isChecked = !this.isChecked;
      this.change(this.isChecked);
      if (this.checkbox) {
        this.checkbox.select({ value: this.nelValue, checked: this.isChecked });
      }
    }
  }

  changeView(): void {
    this.cdr.detectChanges();
  }

  writeValue(val: any): void {
    if (val !== null) {
      this.isChecked = val ? true : false;
      this.cdr.detectChanges();
    }
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
