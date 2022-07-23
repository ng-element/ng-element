import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteScrollComponent } from './infinite-scroll.component';

const routes: Routes = [
  {
    path: '',
    component: InfiniteScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InfiniteScrollRoutingModule { }
