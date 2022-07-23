import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './guide.component';

const routes: Routes = [
  {
    path: '',
    component: GuideComponent,
    children: [
      {
        path: 'installation',
        loadChildren: () => import('./installation/installation.module').then(m => m.InstallationModule)
      },
      {
        path: 'quickstart',
        loadChildren: () => import('./quickstart/quickstart.module').then(m => m.QuickstartModule)
      },
      {
        path: 'transition',
        loadChildren: () => import('./transition/transition.module').then(m => m.TransitionModule)
      },
      {
        path: 'changelog',
        loadChildren: () => import('./changelog/changelog.module').then(m => m.ChangelogModule)
      },
      {
        path: '**',
        redirectTo: 'installation'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GuideRoutingModule { }
