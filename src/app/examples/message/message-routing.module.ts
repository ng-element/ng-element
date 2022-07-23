import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';

const routes: Routes = [
  {
    path: '',
    component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MessageRoutingModule { }
