import { NgModule } from '@angular/core';
import { NelBadgeModule } from 'ng-element-ui/badge';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoBadgeBasicComponent } from './badge-demo-basic.component';
import { NelDemoBadgeMaxComponent } from './badge-demo-max.component';
import { NelDemoBadgeValueComponent } from './badge-demo-value.component';
import { NelDemoBadgeDotComponent } from './badge-demo-dot.component';

@NgModule({
  declarations: [
    NelDemoBadgeBasicComponent,
    NelDemoBadgeMaxComponent,
    NelDemoBadgeValueComponent,
    NelDemoBadgeDotComponent
  ],
  exports: [
    NelDemoBadgeBasicComponent,
    NelDemoBadgeMaxComponent,
    NelDemoBadgeValueComponent,
    NelDemoBadgeDotComponent
  ],
  imports: [
    NelBadgeModule,
    NelButtonModule
  ]
})

export class NelDemoBadgeModule { }
