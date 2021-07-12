import { ChangeDetectionStrategy, Component, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NelCheckboxComponent } from './checkbox.component';
import { NelCheckboxService } from './checkbox.service';

@Component({
  selector: 'nel-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    NelCheckboxService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NelCheckboxGroupComponent),
      multi: true
    }
  ],
  host: {
    class: 'el-checkbox-group'
  }
})

export class NelCheckboxGroupComponent implements ControlValueAccessor {
  @ContentChildren(NelCheckboxComponent, { descendants: false }) checkboxList!: QueryList<NelCheckboxComponent>;
  data: any;
  change = (val: any) => { };

  constructor(
    private checkbox: NelCheckboxService
  ) {
    this.checkbox.selected$.subscribe(val => {
      if (val.checked) {
        this.data.push(val.value);
      } else {
        const itemIndex = this.data.findIndex((valItem: any) => valItem === val.value);
        if (itemIndex > -1) {
          this.data.splice(itemIndex, 1);
        }
      }
      this.change(this.data);
    });
  }

  writeValue(val: any): void {
    console.log(val);
    if (val) {
      this.data = val;
      this.checkboxList.forEach(item => {
        const isItem = this.data.find((selectedItem: any) => selectedItem === item.nelValue);
        if (isItem) {
          item.isChecked = true;
        } else {
          item.isChecked = false;
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
