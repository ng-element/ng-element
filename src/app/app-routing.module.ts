import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'button',
    pathMatch: 'full'
  },
  {
    path: 'guide',
    loadChildren: () => import('./guide/guide.module').then(m => m.GuideModule)
  },
  {
    path: 'component',
    loadChildren: () => import('./examples/example.module').then(m => m.ExampleModule)
  },
  {
    path: 'resource',
    loadChildren: () => import('./resource/resource.module').then(m => m.ResourceModule)
  },
  {
    path: '**',
    redirectTo: 'component/button'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
