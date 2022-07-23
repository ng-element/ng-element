import { NgModule } from '@angular/core';
import { NelDemoResultModule } from '../../../../projects/ng-element-ui/result/demo/result-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';

@NgModule({
  declarations: [
    ResultComponent
  ],
  exports: [
    ResultComponent
  ],
  imports: [
    NelDemoResultModule,
    SharedModule,
    ResultRoutingModule
  ]
})

export class ResultModule { }
