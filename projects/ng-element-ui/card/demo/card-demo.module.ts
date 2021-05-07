import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelCardModule } from 'ng-element-ui/card';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelLayoutModule } from 'ng-element-ui/layout';
import { DemoCardBasicComponent } from './card-demo-basic.component';
import { DemoCardSimpleComponent } from './card-demo-simple.component';
import { DemoCardImageComponent } from './card-demo-image.component';
import { DemoCardShadowComponent } from './card-demo-shadow.component';

@NgModule({
  declarations: [
    DemoCardBasicComponent,
    DemoCardSimpleComponent,
    DemoCardImageComponent,
    DemoCardShadowComponent
  ],
  exports: [
    DemoCardBasicComponent,
    DemoCardSimpleComponent,
    DemoCardImageComponent,
    DemoCardShadowComponent
  ],
  imports: [
    CommonModule,
    NelCardModule,
    NelButtonModule,
    NelLayoutModule
  ]
})

export class NelDemoCardModule { }
