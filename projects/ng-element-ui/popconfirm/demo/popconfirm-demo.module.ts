import { NgModule } from '@angular/core';
import { NelPopconfirmModule } from 'ng-element-ui/popconfirm';
import { NelButtonModule } from 'ng-element-ui/button';
import { DemoPopconfirmBasicComponent } from './popconfirm-demo-basic.component';

@NgModule({
  declarations: [
    DemoPopconfirmBasicComponent
  ],
  exports: [
    DemoPopconfirmBasicComponent
  ],
  imports: [
    NelPopconfirmModule,
    NelButtonModule
  ]
})

export class NelDemoPopconfirmModule { }
