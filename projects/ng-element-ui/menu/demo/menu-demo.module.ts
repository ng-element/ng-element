import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelMenuModule } from 'ng-element-ui/menu';
import { NelDemoMenuBasicComponent } from './menu-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoMenuBasicComponent
  ],
  exports: [
    NelDemoMenuBasicComponent
  ],
  imports: [
    CommonModule,
    NelMenuModule
  ]
})

export class NelDemoMenuModule { }
