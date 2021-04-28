import { NgModule } from '@angular/core';
import { NelDemoButtonModule } from './../../../projects/ng-element-ui/button/demo/button-demo.module';
import { ShareModule } from './../shared/shared.module';
import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    NelDemoButtonModule,
    ShareModule,
    ButtonRoutingModule
  ],
  exports: [
    ButtonComponent
  ]
})

export class ButtonModule {

}
