import { NgModule } from '@angular/core';
import { NelDemoSpaceModule } from '../../../../projects/ng-element-ui/space/demo/space-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceComponent } from './space.component';

@NgModule({
  declarations: [
    SpaceComponent
  ],
  exports: [
    SpaceComponent
  ],
  imports: [
    NelDemoSpaceModule,
    SharedModule,
    SpaceRoutingModule
  ]
})

export class SpaceModule { }
