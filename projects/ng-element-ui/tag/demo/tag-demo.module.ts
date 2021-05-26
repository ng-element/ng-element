import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTagModule } from 'ng-element-ui/tag';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoTagBasicComponent } from './tag-demo-basic.component';
import { NelDemoTagClosableComponent } from './tag-demo-closable.component';
import { NelDemoTagCloseComponent } from './tag-demo-close.component';
import { NelDemoTagSizeComponent } from './tag-demo-size.component';
import { NelDemoTagEffectComponent } from './tag-demo-effect.component';
import { NelDemoTagCheckComponent } from './tag-demo-check.component';

@NgModule({
  declarations: [
    NelDemoTagBasicComponent,
    NelDemoTagClosableComponent,
    NelDemoTagCloseComponent,
    NelDemoTagSizeComponent,
    NelDemoTagEffectComponent,
    NelDemoTagCheckComponent
  ],
  exports: [
    NelDemoTagBasicComponent,
    NelDemoTagClosableComponent,
    NelDemoTagCloseComponent,
    NelDemoTagSizeComponent,
    NelDemoTagEffectComponent,
    NelDemoTagCheckComponent
  ],
  imports: [
    CommonModule,
    NelTagModule,
    NelButtonModule
  ]
})

export class NelDemoTagModule { }
