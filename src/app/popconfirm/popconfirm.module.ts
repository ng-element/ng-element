import { NgModule } from '@angular/core';
import { NelDemoPopconfirmModule } from './../../../projects/ng-element-ui/popconfirm/demo/popconfirm-demo.module';
import { ShareModule } from './../shared/shared.module';
import { PopconfirmRoutingModule } from './popconfirm-routing.module';
import { PopconfirmComponent } from './popconfirm.component';

@NgModule({
  declarations: [
    PopconfirmComponent
  ],
  exports: [
    PopconfirmComponent
  ],
  imports: [
    NelDemoPopconfirmModule,
    ShareModule,
    PopconfirmRoutingModule
  ]
})

export class PopconfirmModule { }
