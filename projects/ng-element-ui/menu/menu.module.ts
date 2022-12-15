import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelMenuComponent } from './menu.component';
import { NelMenuItemComponent } from './menu-item.component';
import { NelMenuItemGroupComponent } from './menu-item-group.component';
import { NelSubMenuComponent } from './sub-menu.component';

@NgModule({
  declarations: [
    NelMenuComponent,
    NelMenuItemComponent,
    NelMenuItemGroupComponent,
    NelSubMenuComponent
  ],
  exports: [
    NelMenuComponent,
    NelMenuItemComponent,
    NelMenuItemGroupComponent,
    NelSubMenuComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelMenuModule { }
