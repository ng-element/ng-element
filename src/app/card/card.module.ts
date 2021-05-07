import { NgModule } from '@angular/core';
import { NelDemoCardModule } from './../../../projects/ng-element-ui/card/demo/card-demo.module';
import { ShareModule } from './../shared/shared.module';
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
    ShareModule,
    CardRoutingModule
  ]
})

export class CardModule { }
