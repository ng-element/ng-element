import { NgModule } from '@angular/core';
import { NelDemoScrollbarModule } from './../../../projects/ng-element-ui/scrollbar/demo/scrollbar-demo.module';
import { ShareModule } from './../shared/shared.module';
import { ScrollbarRoutingModule } from './scrollbar-routing.module';
import { ScrollbarComponent } from './scrollbar.component';

@NgModule({
  declarations: [
    ScrollbarComponent
  ],
  exports: [
    ScrollbarComponent
  ],
  imports: [
    NelDemoScrollbarModule,
    ShareModule,
    ScrollbarRoutingModule
  ]
})

export class ScrollbarModule { }
