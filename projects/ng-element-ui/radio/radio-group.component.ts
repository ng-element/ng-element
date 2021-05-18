import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ChangeDetectionStrategy, Component, forwardRef, QueryList, ContentChildren, Input } from '@angular/core';
import { RadioComponent, SizeType } from './radio.component';
import { NzRadioService } from './radio.service';
import { RadioButtonComponent } from './radio-button.component';

@Component({
  selector: 'nel-radio-group',
  templateUrl: './radio-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    NzRadioService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }]
})

export class RadioGroupComponent implements ControlValueAccessor {
  @Input() nelDisabled = false;
  @Input() nelSize: SizeType | undefined;
  @ContentChildren(RadioComponent, { descendants: false }) radioList!: QueryList<RadioComponent>;
  @ContentChildren(RadioButtonComponent, { descendants: false }) radioButtonList!: QueryList<RadioButtonComponent>;
  data: any;
  change = (value: any) => { };

  constructor(
    private radioS: NzRadioService
  ) {
    this.radioS.selected$.subscribe(val => {
      this.data = val;
      this.radioList.forEach(item => {
        if (item.nelValue !== this.data) {
          item.data = this.data;
          item.isChecked = false;
          item.changeView();
        }
      });
      this.radioButtonList.forEach(item => {
        if (item.nelValue !== this.data) {
          item.data = this.data;
          item.isChecked = false;
          item.inputEle.nativeElement.checked = '';
          item.changeView();
        }
      });
    });
  }

  writeValue(val: any): void {
    if (val) {
      this.data = val;
      this.radioList.forEach(item => {
        if (item.nelValue === this.data) {
          item.data = this.data;
          item.isChecked = true;
          item.changeView();
        } else {

        }
      });
      this.radioButtonList.forEach(item => {
        item.data = this.data;
        // disabled
        if (this.nelDisabled) {
          item.isDisabled = true;
          item.inputDisabled = 'disabled';
        }
        if (item.nelValue === this.data) {
          item.isChecked = true;
          item.inputEle.nativeElement.checked = 'checked';
        } else {
          item.isChecked = false;
        }
        // size
        if (this.nelSize) {
          item.size = this.nelSize;
          console.log(item.size);
        }
        item.changeView();
      });
    }
  }
  registerOnChange(fn: any): void {
    this.change = fn;
  }
  registerOnTouched(fn: any): void { }
}
