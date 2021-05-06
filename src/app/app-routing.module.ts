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
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then(m => m.AlertModule)
  },
  {
    path: 'empty',
    loadChildren: () => import('./empty/empty.module').then(m => m.EmptyModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then(m => m.ButtonModule)
  },
  {
    path: 'link',
    loadChildren: () => import('./link/link.module').then(m => m.LinkModule)
  },
  {
    path: 'container',
    loadChildren: () => import('./container/container.module').then(m => m.ContainerModule)
  },
  {
    path: 'divider',
    loadChildren: () => import('./divider/divider.module').then(m => m.DividerModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'page-header',
    loadChildren: () => import('./page-header/page-header.module').then(m => m.PageHeaderModule)
  },
  {
    path: 'dialog',
    loadChildren: () => import('./dialog/dialog.module').then(m => m.DialogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
