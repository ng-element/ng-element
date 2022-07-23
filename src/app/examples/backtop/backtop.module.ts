import { NgModule } from '@angular/core';
import { NelDemoBacktopModule } from '../../../../projects/ng-element-ui/backtop/demo/backtop-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { BacktopRoutingModule } from './backtop-routing.module';
import { BacktopComponent } from './backtop.component';

@NgModule({
  declarations: [
    BacktopComponent
  ],
  exports: [
    BacktopComponent
  ],
  imports: [
    NelDemoBacktopModule,
    SharedModule,
    BacktopRoutingModule
  ]
})

export class BacktopModule { }
