import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransitionComponent } from './transition.component';

const routes: Routes = [
  {
    path: '',
    component: TransitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TransitionRoutingModule { }
