import { Component } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'nel-demo-form-basic',
    template: `
    <nel-form [formGroup]="activityForm" [label-width]="'120px'">
      <nel-form-item label="Activity name">
        <div class="el-input">
          <div class="el-input__wrapper">
            <input class="el-input__inner" type="text" autocomplete="off" tabindex="0" formControlName="name">
          </div>
        </div>
      </nel-form-item>
      <nel-form-item>
        <button nel-button [nelType]="'primary'">Create</button>
        <button nel-button>Cancel</button>
      </nel-form-item>
    </nel-form>
  `,
    standalone: false
})

export class NelDemoFormBasicComponent {
  activityForm: UntypedFormGroup;

  constructor() {
    this.activityForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(6)
      ])
    });
  }
}
