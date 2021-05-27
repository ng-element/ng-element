import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoAnimationFadeComponent } from './animation-demo-fade.component';
import { NelDemoAnimationZoomComponent } from './animation-demo-zoom.component';
import { NelDemoAnimationCollapseComponent } from './animation-demo-collapse.component';

@NgModule({
  declarations: [
    NelDemoAnimationFadeComponent,
    NelDemoAnimationZoomComponent,
    NelDemoAnimationCollapseComponent
  ],
  exports: [
    NelDemoAnimationFadeComponent,
    NelDemoAnimationZoomComponent,
    NelDemoAnimationCollapseComponent
  ],
  imports: [
    CommonModule,
    NelButtonModule
  ]
})

export class NelDemoAnimationModule { }
