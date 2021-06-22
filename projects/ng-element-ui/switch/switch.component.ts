import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'nel-switch',
  templateUrl: './switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NelSwitchComponent),
      multi: true
    }
  ]
})

export class NelSwitchComponent implements ControlValueAccessor {
  static ngAcceptInputType_nelDisabled: BooleanInput;
  static ngAcceptInputType_nelLoading: BooleanInput;

  @Input() nelWidth = 40;
  @Input() nelActiveColor?: string;
  @Input() nelInactiveColor?: string;
  @Input() nelActiveText?: string;
  @Input() nelInactiveText?: string;
  @Input() @InputBoolean() nelDisabled = false;
  @Input() @InputBoolean() nelLoading = false;
  @Input() nelBeforeChange?: () => boolean | Observable<boolean>;
  data!: boolean;
  change = (value: any) => { };

  constructor(
    private cdf: ChangeDetectorRef
  ) { }

  changeSwitch(): void {
    if (!this.nelLoading && !this.nelDisabled) {
      if (this.nelBeforeChange) {
        const before = this.nelBeforeChange();
        if (before instanceof Observable) {
          before.subscribe((data) => {
            if (data) {
              this.data = !this.data;
              this.change(this.data);
            }
          });
        } else if (before !== false) {
          this.data = !this.data;
          this.change(this.data);
        }
      } else {
        this.data = !this.data;
        this.change(this.data);
      }
    }
  }

  writeValue(val: any): void {
    if (val !== undefined) {
      this.data = val;
      this.cdf.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
