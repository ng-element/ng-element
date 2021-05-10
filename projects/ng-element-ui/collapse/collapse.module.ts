import { NgModule } from '@angular/core';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { CollapseComponent } from './collapse.component';
import { CollapseItemComponent } from './collapse-item.component';

@NgModule({
  declarations: [
    CollapseComponent,
    CollapseItemComponent
  ],
  exports: [
    CollapseComponent,
    CollapseItemComponent
  ],
  imports: [
    NelIconModule,
    NelOutletModule
  ]
})

export class NelCollapseModule { }
