import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SkeletonRoutingModule { }
