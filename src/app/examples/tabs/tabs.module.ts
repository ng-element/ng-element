import { NgModule } from '@angular/core';
import { NelDemoTabsModule } from '../../../../projects/ng-element-ui/tabs/demo/tabs-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [
    TabsComponent
  ],
  exports: [
    TabsComponent
  ],
  imports: [
    NelDemoTabsModule,
    SharedModule,
    TabsRoutingModule
  ]
})

export class TabsModule { }
