import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, Optional, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NelRadioService } from './radio.service';

@Component({
  selector: '[nel-radio-button]',
  templateUrl: './radio-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NelRadioButtonComponent),
    multi: true
  }],
  host: {
    '[class]': `'el-radio-button'`,
    '[class.is-active]': 'isChecked',
    '[class.is-disabled]': `isDisabled`,
    '[class.el-radio-button--medium]': `size == 'medium'`,
    '[class.el-radio-button--small]': `size == 'small'`,
    '[class.el-radio-button--mini]': `size == 'mini'`,
    '(click)': 'onHostClick($event)'
  }
})

export class NelRadioButtonComponent implements ControlValueAccessor {
  isChecked = false;
  isDisabled = false;
  inputDisabled = '';
  size: 'medium' | 'small' | 'mini' | undefined;
  @Input() nelValue: any;
  @Input() set nelDisabled(val: boolean) {
    this.isDisabled = val;
    if (val) {
      this.inputDisabled = 'disabled';
    } else {
      this.inputDisabled = '';
    }
    console.log(this.inputDisabled);
  };
  @ViewChild('inputEle', { static: false }) inputEle!: ElementRef;
  data: any;
  change = (value: any) => { };

  constructor(
    @Optional() private radioS: NelRadioService,
    private cdr: ChangeDetectorRef
  ) { }

  onHostClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
    if (!this.isDisabled) {
      this.data = this.nelValue;
      this.isChecked = this.data === this.nelValue;
      this.inputEle.nativeElement.checked = 'checked';
      this.change(this.nelValue);
      if (this.radioS) {
        this.radioS.select(this.nelValue);
      }
    }
  }

  changeView(): void {
    this.cdr.markForCheck();
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
