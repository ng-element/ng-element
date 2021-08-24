import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils/convert';

export type SizeType = 'medium' | 'small' | 'mini' | null;

@Component({
  selector: 'nel-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NelInputComponent),
      multi: true
    }
  ],
  host: {
    class: 'el-input',
    '[class.is-disabled]': 'nelDisabled',
    '[class.el-input--suffix]': 'nelClearable',
    '[class.el-input--medium]': `nelSize == 'medium'`,
    '[class.el-input--small]': `nelSize == 'small'`,
    '[class.el-input--mini]': `nelSize == 'mini'`,
    '(mouseenter)': 'handleMouseEnter()',
    '(mouseleave)': 'handleMouseLeave()'
  }
})

export class NelInputComponent implements ControlValueAccessor, OnChanges {
  static ngAcceptInputType_nelDisabled: BooleanInput;
  static ngAcceptInputType_nelClearable: BooleanInput;
  static ngAcceptInputType_nelShowPassword: BooleanInput;

  @Input() nelPlaceHolder = '';
  @Input() @InputBoolean() nelDisabled = false;
  @Input() @InputBoolean() nelClearable = false;
  @Input() @InputBoolean() nelShowPassword = false;
  @Input() nelSize: SizeType = null;
  @Output() onClear: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('inputEle', { static: false }) inputEle!: ElementRef;
  data: any;
  focused = false;
  hovering = false;
  type = 'text';
  change = (val: any) => { }

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { nelShowPassword } = changes;
    if (nelShowPassword) {
      this.type = this.nelShowPassword ? 'password' : 'text';
    }
  }

  onInput($event: any): void {
    this.data = $event.target.value;
    this.change(this.data);
  }

  handleBlur(): void {
    this.focused = false;
  }

  handleFocus(): void {
    this.focused = true;
  }

  handleClear(): void {
    this.data = '';
    this.change(this.data);
    this.inputEle.nativeElement.value = this.data;
    this.onClear.emit();
  }

  handleMouseEnter(): void {
    this.hovering = true;
  }

  handleMouseLeave(): void {
    this.hovering = false;
  }

  changeType(): void {
    this.type = this.type === 'text' ? 'password' : 'text';
  }

  writeValue(value: any): void {
    this.data = value;
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
