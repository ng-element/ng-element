import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorderComponent } from './border.component';

const routes: Routes = [
  {
    path: '',
    component: BorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BorderRoutingModule { }
