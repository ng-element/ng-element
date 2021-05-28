import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffixComponent } from './affix.component';

const routes: Routes = [
  {
    path: '',
    component: AffixComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AffixRoutingModule { }
