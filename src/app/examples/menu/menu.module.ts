import { NgModule } from '@angular/core';
import { NelDemoMenuModule } from '../../../../projects/ng-element-ui/menu/demo/menu-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    NelDemoMenuModule,
    SharedModule,
    MenuRoutingModule
  ]
})

export class MenuModule { }
