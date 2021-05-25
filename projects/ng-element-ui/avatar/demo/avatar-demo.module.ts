import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelAvatarModule } from 'ng-element-ui/avatar';
import { NelLayoutModule } from 'ng-element-ui/layout';
import { NelDemoAvatarBasicComponent } from './avatar-demo-basic.component';
import { NelDemoAvatarTypeComponent } from './avatar-demo-type.component';
import { NelDemoAvatarErrorComponent } from './avatar-demo-error.component';
import { NelDemoAvatarFitComponent } from './avatar-demo-fit.component';

@NgModule({
  declarations: [
    NelDemoAvatarBasicComponent,
    NelDemoAvatarTypeComponent,
    NelDemoAvatarErrorComponent,
    NelDemoAvatarFitComponent
  ],
  exports: [
    NelDemoAvatarBasicComponent,
    NelDemoAvatarTypeComponent,
    NelDemoAvatarErrorComponent,
    NelDemoAvatarFitComponent
  ],
  imports: [
    CommonModule,
    NelAvatarModule,
    NelLayoutModule
  ]
})

export class NelDemoAvatarModule { }
