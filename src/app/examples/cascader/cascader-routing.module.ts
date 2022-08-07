import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CascaderComponent } from './cascader.component';

const routes: Routes = [
  {
    path: '',
    component: CascaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CascaderRoutingModule { }
