import { Component, ContentChild, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { FormControlDirective, FormControlName, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nel-form-item',
    templateUrl: './form-item.component.html',
    standalone: false
})

export class NelFormItemComponent implements AfterContentInit, OnDestroy {
  @Input() label?: string;
  @ContentChild(NgControl, { static: false }) defaultValidateControl?: FormControlName | FormControlDirective;
  labelWidth?: string;
  isError = false;
  statusSub?: Subscription;

  ngOnDestroy(): void {
    if (this.statusSub) {
      this.statusSub.unsubscribe();
    }
  }

  ngAfterContentInit(): void {
    if (this.defaultValidateControl) {
      this.statusSub = this.defaultValidateControl.statusChanges?.subscribe((status) => {
        this.isError = status === 'INVALID' ? true : false;
      });
    }
  }
}
