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
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then(m => m.CardModule)
  },
  {
    path: 'tooltip',
    loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule)
  },
  {
    path: 'backtop',
    loadChildren: () => import('./backtop/backtop.module').then(m => m.BacktopModule)
  },
  {
    path: 'collapse',
    loadChildren: () => import('./collapse/collapse.module').then(m => m.CollapseModule)
  },
  {
    path: 'scrollbar',
    loadChildren: () => import('./scrollbar/scrollbar.module').then(m => m.ScrollbarModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then(m => m.RadioModule)
  },
  {
    path: 'image',
    loadChildren: () => import('./image/image.module').then(m => m.ImageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
  },
  {
    path: 'popconfirm',
    loadChildren: () => import('./popconfirm/popconfirm.module').then(m => m.PopconfirmModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then(m => m.PopoverModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./avatar/avatar.module').then(m => m.AvatarModule)
  },
  {
    path: 'tag',
    loadChildren: () => import('./tag/tag.module').then(m => m.TagModule)
  },
  {
    path: 'transition',
    loadChildren: () => import('./transition/transition.module').then(m => m.TransitionModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./badge/badge.module').then(m => m.BadgeModule)
  },
  {
    path: 'affix',
    loadChildren: () => import('./affix/affix.module').then(m => m.AffixModule)
  },
  {
    path: 'space',
    loadChildren: () => import('./space/space.module').then(m => m.SpaceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
