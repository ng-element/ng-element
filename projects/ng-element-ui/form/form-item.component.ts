import { Component, ContentChild, Input, AfterContentInit } from '@angular/core';
import { FormControlDirective, FormControlName, NgControl } from '@angular/forms';

@Component({
  selector: 'nel-form-item',
  templateUrl: './form-item.component.html'
})

export class NelFormItemComponent implements AfterContentInit {
  @Input() label?: string;
  @ContentChild(NgControl, { static: false }) defaultValidateControl?: FormControlName | FormControlDirective;
  labelWidth?: string;
  isError = false;

  ngAfterContentInit() {
    if (this.defaultValidateControl) {
      this.defaultValidateControl.statusChanges?.subscribe((status) => {
        this.isError = status === 'INVALID' ? true : false;
      });
    }
  }
}
