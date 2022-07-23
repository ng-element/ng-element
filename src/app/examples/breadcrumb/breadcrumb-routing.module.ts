import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BreadcrumbRoutingModule { }
