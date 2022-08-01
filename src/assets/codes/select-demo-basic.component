import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-select-basic',
  template: `
    <nel-select [ngModel]="option" (ngModelChange)="selected($event)">
      <nel-option *ngFor="let option of options" [label]="option.label" [value]="option.value"></nel-option>
    </nel-select>
  `
})

export class NelDemoSelectBasicComponent {
  options = [
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ];
  option = 'Option5';

  selected(value: any) {
    console.log(value);
  }
}
