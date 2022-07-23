import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BacktopComponent } from './backtop.component';

const routes: Routes = [
  {
    path: '',
    component: BacktopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BacktopRoutingModule { }
