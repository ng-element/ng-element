import { NgModule } from '@angular/core';
import { NelDemoDescriptionsModule } from '../../../../projects/ng-element-ui/descriptions/demo/descriptions-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { DescriptionsRoutingModule } from './descriptions-routing.module';
import { DescriptionsComponent } from './descriptions.component';

@NgModule({
  declarations: [
    DescriptionsComponent
  ],
  exports: [
    DescriptionsComponent
  ],
  imports: [
    NelDemoDescriptionsModule,
    SharedModule,
    DescriptionsRoutingModule
  ]
})

export class DescriptionsModule { }
