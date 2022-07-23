import { NgModule } from '@angular/core';
import { NelDemoCardModule } from '../../../../projects/ng-element-ui/card/demo/card-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    NelDemoCardModule,
    SharedModule,
    CardRoutingModule
  ]
})

export class CardModule { }
