import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopconfirmComponent } from './popconfirm.component';

const routes: Routes = [
  {
    path: '',
    component: PopconfirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PopconfirmRoutingModule { }
