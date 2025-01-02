import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';

@Component({
    selector: 'nel-input-number',
    templateUrl: './input-number.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NelInputNumberComponent),
            multi: true
        }
    ],
    standalone: false
})

export class NelInputNumberComponent implements ControlValueAccessor {
  static ngAcceptInputType_nelDisabled: BooleanInput;

  displayValue = 0;
  decreaseDisabled = false;
  increaseDisabled = false;
  @Input() nelMin?: number;
  @Input() nelMax?: number;
  @Input() nelStep = 1;
  @Input() @InputBoolean() nelDisabled = false;
  @ViewChild('inputEle', { static: false }) inputEle!: ElementRef;
  change = (value: number) => { };

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  onModelChange(event: number): void {
    this.rangeDisabled(event);
  }

  blur(): void {
    const checkStr = `^-?\\d*(\\.?\\d+)`;
    const checkRegExp = new RegExp(checkStr, 'g');
    if (this.displayValue) {
      const formatter = this.inputEle.nativeElement.value.match(checkRegExp);
      if (formatter) {
        this.displayValue = formatter[0];
        this.inputEle.nativeElement.value = formatter[0];
      }
    }
  }

  decrease(): void {
    if (!this.nelDisabled && !this.decreaseDisabled) {
      this.rangeDisabled(parseFloat(this.displayValue.toString()) - this.nelStep);
    }
  }

  increase(): void {
    if (!this.nelDisabled && !this.increaseDisabled) {
      this.rangeDisabled(parseFloat(this.displayValue.toString()) + this.nelStep);
    }
  }

  rangeDisabled(val: number): void {
    console.log(val);
    console.log(this.nelMin);
    if (this.nelMin && val <= this.nelMin) {
      this.displayValue = this.nelMin;
      this.decreaseDisabled = true;
    } else {
      this.displayValue = val;
      this.decreaseDisabled = false;
    }
    if (this.nelMax && val >= this.nelMax) {
      this.displayValue = this.nelMax;
      this.increaseDisabled = true;
    } else {
      this.displayValue = val;
      this.increaseDisabled = false;
    }
    if (this.inputEle) {
      this.inputEle.nativeElement.value = this.displayValue;
    }
    this.cdr.markForCheck();
  }

  writeValue(val: number): void {
    this.rangeDisabled(val);
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
