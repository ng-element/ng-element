import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelScrollbarModule } from 'ng-element-ui/scrollbar';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoScrollbarBasicComponent } from './scrollbar-demo-basic.component';
import { NelDemoScrollbarHorizontalComponent } from './scrollbar-demo-horizontal.component';
import { NelDemoScrollbarMaxheightComponent } from './scrollbar-demo-maxheight.component';

@NgModule({
  declarations: [
    NelDemoScrollbarBasicComponent,
    NelDemoScrollbarHorizontalComponent,
    NelDemoScrollbarMaxheightComponent
  ],
  exports: [
    NelDemoScrollbarBasicComponent,
    NelDemoScrollbarHorizontalComponent,
    NelDemoScrollbarMaxheightComponent
  ],
  imports: [
    CommonModule,
    NelScrollbarModule,
    NelButtonModule
  ]
})

export class NelDemoScrollbarModule { }
