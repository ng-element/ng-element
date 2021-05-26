import { NgModule } from '@angular/core';
import { NelPopconfirmModule } from 'ng-element-ui/popconfirm';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoPopconfirmBasicComponent } from './popconfirm-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoPopconfirmBasicComponent
  ],
  exports: [
    NelDemoPopconfirmBasicComponent
  ],
  imports: [
    NelPopconfirmModule,
    NelButtonModule
  ]
})

export class NelDemoPopconfirmModule { }
