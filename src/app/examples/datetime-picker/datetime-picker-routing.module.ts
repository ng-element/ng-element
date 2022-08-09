import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateTimePickerComponent } from './datetime-picker.component';

const routes: Routes = [
  {
    path: '',
    component: DateTimePickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DateTimePickerRoutingModule { }
