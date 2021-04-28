import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DividerComponent } from './divider.component';

const routes: Routes = [
  {
    path: '',
    component: DividerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DividerRoutingModule { }
