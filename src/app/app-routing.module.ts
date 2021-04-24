import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'icon',
    pathMatch: 'full'
  },
  {
    path: 'icon',
    loadChildren: () => import('./icon/icon.module').then(m => m.IconModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
