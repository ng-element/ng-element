import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

interface Colors {
  number: string
}

@Component({
  selector: 'nel-rate',
  templateUrl: './rate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NelRateComponent),
      multi: true
    }
  ]
})

export class NelRateComponent implements ControlValueAccessor {
  @Input() nelColors: Array<string> | { [key: number]: string } = ['#F7BA2A', '#F7BA2A', '#F7BA2A'];
  data: number | null = null;
  currentValue = -1;
  starArray = [0, 1, 2, 3, 4];
  change = (val: any) => { };

  handleHover(value: number): void {
    this.currentValue = value;
  }

  handleClick(value: number): void {
    this.data = value;
  }

  writeValue(val: any): void {
    this.data = val;
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
