import { NgModule } from '@angular/core';
import { NelDemoLoadingModule } from '../../../projects/ng-element-ui/loading/demo/loading-demo.module';
import { SharedModule } from './../shared/shared.module';
import { LoadingRoutingModule } from './loading-routing.module';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
  imports: [
    NelDemoLoadingModule,
    SharedModule,
    LoadingRoutingModule
  ]
})

export class LoadingModule { }
