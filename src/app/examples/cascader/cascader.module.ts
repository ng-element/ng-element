import { NgModule } from '@angular/core';
import { NelDemoCascaderModule } from '../../../../projects/ng-element-ui/cascader/demo/cascader-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { CascaderRoutingModule } from './cascader-routing.module';
import { CascaderComponent } from './cascader.component';

@NgModule({
  declarations: [
    CascaderComponent
  ],
  exports: [
    CascaderComponent
  ],
  imports: [
    NelDemoCascaderModule,
    SharedModule,
    CascaderRoutingModule
  ]
})

export class CascaderModule { }
