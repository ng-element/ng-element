import { NgModule } from '@angular/core';
import { NelDemoAvatarModule } from './../../../projects/ng-element-ui/avatar/demo/avatar-demo.module';
import { SharedModule } from './../shared/shared.module';
import { AvatarRoutingModule } from './avatar-routing.module';
import { AvatarComponent } from './avatar.component';

@NgModule({
  declarations: [
    AvatarComponent
  ],
  exports: [
    AvatarComponent
  ],
  imports: [
    NelDemoAvatarModule,
    SharedModule,
    AvatarRoutingModule
  ]
})

export class AvatarModule { }
