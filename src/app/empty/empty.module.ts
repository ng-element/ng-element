import { NgModule } from '@angular/core';
import { NelEmptyModule } from 'ng-element-ui/empty';
import { EmptyRoutingModule } from './empty-routing.module';
import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    NelEmptyModule,
    EmptyRoutingModule
  ],
  exports: [
    EmptyComponent
  ]
})

export class EmptyModule { }
