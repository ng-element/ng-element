import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageBoxComponent } from './message-box.component';

const routes: Routes = [
  {
    path: '',
    component: MessageBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MessageBoxRoutingModule { }
