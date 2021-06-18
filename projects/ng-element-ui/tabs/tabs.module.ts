import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelTabsComponent } from './tabs.component';
import { NelTabPaneComponent } from './tab-pane.component';

@NgModule({
  declarations: [
    NelTabsComponent,
    NelTabPaneComponent
  ],
  exports: [
    NelTabsComponent,
    NelTabPaneComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelTabsModule { }
