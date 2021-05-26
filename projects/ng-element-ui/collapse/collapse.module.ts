import { NgModule } from '@angular/core';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelCollapseComponent } from './collapse.component';
import { NelCollapseItemComponent } from './collapse-item.component';

@NgModule({
  declarations: [
    NelCollapseComponent,
    NelCollapseItemComponent
  ],
  exports: [
    NelCollapseComponent,
    NelCollapseItemComponent
  ],
  imports: [
    NelIconModule,
    NelOutletModule
  ]
})

export class NelCollapseModule { }
