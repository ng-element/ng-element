import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelScrollbarModule } from 'ng-element-ui/scrollbar';
import { NelButtonModule } from 'ng-element-ui/button';
import { DemoScrollbarBasicComponent } from './scrollbar-demo-basic.component';
import { DemoScrollbarHorizontalComponent } from './scrollbar-demo-horizontal.component';
import { DemoScrollbarMaxheightComponent } from './scrollbar-demo-maxheight.component';

@NgModule({
  declarations: [
    DemoScrollbarBasicComponent,
    DemoScrollbarHorizontalComponent,
    DemoScrollbarMaxheightComponent
  ],
  exports: [
    DemoScrollbarBasicComponent,
    DemoScrollbarHorizontalComponent,
    DemoScrollbarMaxheightComponent
  ],
  imports: [
    CommonModule,
    NelScrollbarModule,
    NelButtonModule
  ]
})

export class NelDemoScrollbarModule { }
