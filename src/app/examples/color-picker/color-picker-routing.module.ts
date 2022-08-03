import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPickerComponent } from './color-picker.component';

const routes: Routes = [
  {
    path: '',
    component: ColorPickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ColorPickerRoutingModule { }
