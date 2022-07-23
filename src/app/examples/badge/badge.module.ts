import { NgModule } from '@angular/core';
import { NelDemoBadgeModule } from '../../../../projects/ng-element-ui/badge/demo/badge-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { BadgeRoutingModule } from './badge-routing.module';
import { BadgeComponent } from './badge.component';

@NgModule({
  declarations: [
    BadgeComponent
  ],
  exports: [
    BadgeComponent
  ],
  imports: [
    NelDemoBadgeModule,
    SharedModule,
    BadgeRoutingModule
  ]
})

export class BadgeModule { }
