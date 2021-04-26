import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDemoIconModule } from './../../../projects/ng-element-ui/icon/demo/icon-demo.module';
import { ShareModule } from './../shared/shared.module';
import { IconRoutingModule } from './icon-routing.module';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    NelIconModule,
    NelDemoIconModule,
    ShareModule,
    IconRoutingModule
  ],
  exports: [
    IconComponent
  ]
})

export class IconModule {

}
