import { NgModule } from '@angular/core';
import { NelLoadingModule } from 'ng-element-ui/loading';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoLoadingBasicComponent } from './loading-demo-basic.component';
import { NelDemoLoadingCustomComponent } from './loading-demo-custom.component';
import { NelDemoLoadingFullscreenComponent } from './loading-demo-fullscreen.component';

@NgModule({
  declarations: [
    NelDemoLoadingBasicComponent,
    NelDemoLoadingCustomComponent,
    NelDemoLoadingFullscreenComponent
  ],
  exports: [
    NelDemoLoadingBasicComponent,
    NelDemoLoadingCustomComponent,
    NelDemoLoadingFullscreenComponent
  ],
  imports: [
    NelLoadingModule,
    NelButtonModule
  ]
})

export class NelDemoLoadingModule { }
