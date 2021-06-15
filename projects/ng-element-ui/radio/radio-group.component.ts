import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ChangeDetectionStrategy, Component, forwardRef, QueryList, ContentChildren, Input } from '@angular/core';
import { NelRadioComponent, SizeType } from './radio.component';
import { NelRadioService } from './radio.service';
import { NelRadioButtonComponent } from './radio-button.component';

@Component({
  selector: 'nel-radio-group',
  templateUrl: './radio-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    NelRadioService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NelRadioGroupComponent),
      multi: true
    }]
})

export class NelRadioGroupComponent implements ControlValueAccessor {
  @Input() nelDisabled = false;
  @Input() nelSize: SizeType | undefined;
  @ContentChildren(NelRadioComponent, { descendants: false }) radioList!: QueryList<NelRadioComponent>;
  @ContentChildren(NelRadioButtonComponent, { descendants: false }) radioButtonList!: QueryList<NelRadioButtonComponent>;
  data: any;
  change = (value: any) => { };

  constructor(
    private radio: NelRadioService
  ) {
    this.radio.selected$.subscribe(val => {
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
      this.change(this.data);
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
