import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeSelectComponent } from './time-select.component';

const routes: Routes = [
  {
    path: '',
    component: TimeSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TimeSelectRoutingModule { }
