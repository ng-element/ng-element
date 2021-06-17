import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelScrollbarModule } from 'ng-element-ui/scrollbar';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDropdownMenuComponent } from './dropdown-menu.component';
import { NelDropdownItemComponent } from './dropdown-item.component';
import { NelDropdownDirective } from './dropdown.directive';
import { NelDropdownButtonDirective } from './dropdown-button.directive';

@NgModule({
  declarations: [
    NelDropdownMenuComponent,
    NelDropdownItemComponent,
    NelDropdownDirective,
    NelDropdownButtonDirective
  ],
  exports: [
    NelDropdownMenuComponent,
    NelDropdownItemComponent,
    NelDropdownDirective,
    NelDropdownButtonDirective
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelScrollbarModule,
    NelIconModule
  ]
})

export class NelDropdownModule { }
