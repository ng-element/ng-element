import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-checkbox-indeterminate',
    template: `
    <label nel-checkbox [nelIndeterminate]="isIndeterminate" [(ngModel)]="checkAll" (ngModelChange)="handleCheckAllChange($event)">全选</label>
    <div style="margin: 15px 0;"></div>
    <nel-checkbox-group [(ngModel)]="checkedCities" (ngModelChange)="handleCheckedCitiesChange($event)">
      <label nel-checkbox *ngFor="let city of cities" [nelValue]="city">{{city}}</label>
    </nel-checkbox-group>
  `,
    standalone: false
})

export class NelDemoCheckboxIndeterminateComponent {
  cityOptions = ['上海', '北京', '广州', '深圳'];
  checkAll = false;
  cities = ['上海', '北京', '广州', '深圳'];
  checkedCities = ['上海', '北京'];
  isIndeterminate = true;

  handleCheckAllChange(val: any): void {
    console.log(val);
    this.checkedCities = val ? this.cityOptions : [];
    this.isIndeterminate = false;
  }

  handleCheckedCitiesChange(value: any): void {
    const checkedCount = value.length;
    this.checkAll = checkedCount === this.cities.length;
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
  }
}
