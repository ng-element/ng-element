import { ChangeDetectionStrategy, Component, forwardRef, Input, AfterContentInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';
import { NelCollapseItemComponent } from './collapse-item.component';

@Component({
    selector: 'nel-collapse',
    templateUrl: './collapse.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NelCollapseComponent),
            multi: true
        }],
    standalone: false
})

export class NelCollapseComponent implements ControlValueAccessor, AfterContentInit {
  static ngAcceptInputType_nelAccordion: BooleanInput;

  @Input() @InputBoolean() nelAccordion = false;
  itemList: Map<string | number, NelCollapseItemComponent> = new Map();
  data!: string | Array<string> | null;
  change = (value: any) => { };

  changeItemActive(nelName: string | number, expanded: boolean): void {
    if (this.nelAccordion) {
      this.itemList.forEach(item => {
        if (item.nelName !== nelName) {
          item.updateActiveStatus(false);
        }
      });
      this.data = expanded ? nelName.toString() : null;
    } else {
      if (expanded) {
        if (this.data instanceof Array) {
          this.data.push(nelName.toString());
        } else {
          this.data = [nelName.toString()];
        }
      } else {
        if (this.data instanceof Array) {
          this.data.splice(this.data.indexOf(nelName.toString()), 1);
          if (this.data.length === 0) {
            this.data = null;
          }
        }
      }
    }
    this.change(this.data);
  }

  ngAfterContentInit(): void {

  }

  writeValue(val: string | Array<string>): void {
    if (val) {
      this.data = val;
      this.itemList.forEach(item => {
        if (typeof val === 'string') {
          if (val === item.nelName.toString()) {
            item.updateActiveStatus(true);
          } else {
            item.updateActiveStatus(false);
          }
        } else {
          if (val.indexOf(item.nelName.toString()) > -1) {
            item.updateActiveStatus(true);
          } else {
            item.updateActiveStatus(false);
          }
        }
      });
    }
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void { }
}
