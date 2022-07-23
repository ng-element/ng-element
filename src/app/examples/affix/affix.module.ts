import { NgModule } from '@angular/core';
import { NelDemoAffixModule } from '../../../../projects/ng-element-ui/affix/demo/affix-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { AffixRoutingModule } from './affix-routing.module';
import { AffixComponent } from './affix.component';

@NgModule({
  declarations: [
    AffixComponent
  ],
  exports: [
    AffixComponent
  ],
  imports: [
    NelDemoAffixModule,
    SharedModule,
    AffixRoutingModule
  ]
})

export class AffixModule { }
