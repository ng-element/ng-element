import { NgModule } from '@angular/core';
import { NelDemoAnimationModule } from './../../../projects/ng-element-ui/core/animation/demo/animation-demo.module';
import { SharedModule } from './../shared/shared.module';
import { TransitionRoutingModule } from './transition-routing.module';
import { TransitionComponent } from './transition.component';

@NgModule({
  declarations: [
    TransitionComponent
  ],
  exports: [
    TransitionComponent
  ],
  imports: [
    NelDemoAnimationModule,
    SharedModule,
    TransitionRoutingModule
  ]
})

export class TransitionModule { }
