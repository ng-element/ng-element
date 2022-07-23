import { NgModule } from '@angular/core';
import { NelDemoDrawerModule } from '../../../../projects/ng-element-ui/drawer/demo/drawer-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { DrawerRoutingModule } from './drawer-routing.module';
import { DrawerComponent } from './drawer.component';

@NgModule({
  declarations: [
    DrawerComponent
  ],
  exports: [
    DrawerComponent
  ],
  imports: [
    NelDemoDrawerModule,
    SharedModule,
    DrawerRoutingModule
  ]
})

export class DrawerModule { }
