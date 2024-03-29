import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example.component';

const routes: Routes = [

  {
    path: '',
    component: ExampleComponent,
    children: [
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
      },
      {
        path: 'breadcrumb',
        loadChildren: () => import('./breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule)
      },
      {
        path: 'descriptions',
        loadChildren: () => import('./descriptions/descriptions.module').then(m => m.DescriptionsModule)
      },
      {
        path: 'steps',
        loadChildren: () => import('./steps/steps.module').then(m => m.StepsModule)
      },
      {
        path: 'skeleton',
        loadChildren: () => import('./skeleton/skeleton.module').then(m => m.SkeletonModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
      },
      {
        path: 'drawer',
        loadChildren: () => import('./drawer/drawer.module').then(m => m.DrawerModule)
      },
      {
        path: 'carousel',
        loadChildren: () => import('./carousel/carousel.module').then(m => m.CarouselModule)
      },
      {
        path: 'message',
        loadChildren: () => import('./message/message.module').then(m => m.MessageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
      },
      {
        path: 'message-box',
        loadChildren: () => import('./message-box/message-box.module').then(m => m.MessageBoxModule)
      },
      {
        path: 'loading',
        loadChildren: () => import('./loading/loading.module').then(m => m.LoadingModule)
      },
      {
        path: 'dropdown',
        loadChildren: () => import('./dropdown/dropdown.module').then(m => m.DropdownModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
      },
      {
        path: 'switch',
        loadChildren: () => import('./switch/switch.module').then(m => m.SwitchModule)
      },
      {
        path: 'progress',
        loadChildren: () => import('./progress/progress.module').then(m => m.ProgressModule)
      },
      {
        path: 'result',
        loadChildren: () => import('./result/result.module').then(m => m.ResultModule)
      },
      {
        path: 'color',
        loadChildren: () => import('./color/color.module').then(m => m.ColorModule)
      },
      {
        path: 'typography',
        loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule)
      },
      {
        path: 'border',
        loadChildren: () => import('./border/border.module').then(m => m.BorderModule)
      },
      {
        path: 'checkbox',
        loadChildren: () => import('./checkbox/checkbox.module').then(m => m.CheckboxModule)
      },
      {
        path: 'input',
        loadChildren: () => import('./input/input.module').then(m => m.InputModule)
      },
      {
        path: 'rate',
        loadChildren: () => import('./rate/rate.module').then(m => m.RateModule)
      },
      {
        path: 'input-number',
        loadChildren: () => import('./input-number/input-number.module').then(m => m.InputNumberModule)
      },
      {
        path: 'slider',
        loadChildren: () => import('./slider/slider.module').then(m => m.SliderModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'pagination',
        loadChildren: () => import('./pagination/pagination.module').then(m => m.PaginationModule)
      },
      {
        path: 'select',
        loadChildren: () => import('./select/select.module').then(m => m.SelectModule)
      },
      {
        path: 'time-select',
        loadChildren: () => import('./time-select/time-select.module').then(m => m.TimeSelectModule)
      },
      {
        path: 'time-picker',
        loadChildren: () => import('./time-picker/time-picker.module').then(m => m.TimePickerModule)
      },
      {
        path: 'color-picker',
        loadChildren: () => import('./color-picker/color-picker.module').then(m => m.ColorPickerModule)
      },
      {
        path: 'cascader',
        loadChildren: () => import('./cascader/cascader.module').then(m => m.CascaderModule)
      },
      {
        path: 'date-picker',
        loadChildren: () => import('./date-picker/date-picker.module').then(m => m.DatePickerModule)
      },
      {
        path: 'upload',
        loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule)
      },
      {
        path: 'tree',
        loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'transfer',
        loadChildren: () => import('./transfer/transfer.module').then(m => m.TransferModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./form/form.module').then(m => m.FormModule)
      },
      {
        path: 'datetime-picker',
        loadChildren: () => import('./datetime-picker/datetime-picker.module').then(m => m.DateTimePickerModule)
      },
      {
        path: '**',
        redirectTo: 'button'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExampleRoutingModule { }
