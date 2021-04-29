import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header.component';

const routes: Routes = [
  {
    path: '',
    component: PageHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageHeaderRoutingModule { }
