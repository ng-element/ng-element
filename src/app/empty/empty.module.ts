import { NgModule } from '@angular/core';
import { NelDemoEmptyModule } from './../../../projects/ng-element-ui/empty/demo/empty-demo.module';
import { SharedModule } from './../shared/shared.module';
import { EmptyRoutingModule } from './empty-routing.module';
import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    NelDemoEmptyModule,
    SharedModule,
    EmptyRoutingModule
  ],
  exports: [
    EmptyComponent
  ]
})

export class EmptyModule { }
