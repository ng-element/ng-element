import { NgModule } from '@angular/core';
import { NelEmptyModule } from 'ng-element-ui/empty';
import { NelDemoEmptyModule } from './../../../projects/ng-element-ui/empty/demo/empty-demo.module';
import { ShareModule } from './../shared/shared.module';
import { EmptyRoutingModule } from './empty-routing.module';
import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    NelEmptyModule,
    NelDemoEmptyModule,
    ShareModule,
    EmptyRoutingModule
  ],
  exports: [
    EmptyComponent
  ]
})

export class EmptyModule { }
