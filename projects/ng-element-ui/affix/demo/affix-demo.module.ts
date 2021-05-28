import { NgModule } from '@angular/core';
import { NelAffixModule } from 'ng-element-ui/affix';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoAffixBasicComponent } from './affix-demo-basic.component';
import { NelDemoAffixTargetComponent } from './affix-demo-target.component';
import { NelDemoAffixPositionComponent } from './affix-demo-position.component';

@NgModule({
  declarations: [
    NelDemoAffixBasicComponent,
    NelDemoAffixTargetComponent,
    NelDemoAffixPositionComponent
  ],
  exports: [
    NelDemoAffixBasicComponent,
    NelDemoAffixTargetComponent,
    NelDemoAffixPositionComponent
  ],
  imports: [
    NelAffixModule,
    NelButtonModule
  ]
})

export class NelDemoAffixModule { }
