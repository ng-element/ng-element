import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelCardModule } from 'ng-element-ui/card';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelLayoutModule } from 'ng-element-ui/layout';
import { NelDemoCardBasicComponent } from './card-demo-basic.component';
import { NelDemoCardSimpleComponent } from './card-demo-simple.component';
import { NelDemoCardImageComponent } from './card-demo-image.component';
import { NelDemoCardShadowComponent } from './card-demo-shadow.component';

@NgModule({
  declarations: [
    NelDemoCardBasicComponent,
    NelDemoCardSimpleComponent,
    NelDemoCardImageComponent,
    NelDemoCardShadowComponent
  ],
  exports: [
    NelDemoCardBasicComponent,
    NelDemoCardSimpleComponent,
    NelDemoCardImageComponent,
    NelDemoCardShadowComponent
  ],
  imports: [
    CommonModule,
    NelCardModule,
    NelButtonModule,
    NelLayoutModule
  ]
})

export class NelDemoCardModule { }
