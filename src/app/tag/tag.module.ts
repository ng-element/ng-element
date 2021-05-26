import { NgModule } from '@angular/core';
import { NelDemoTagModule } from './../../../projects/ng-element-ui/tag/demo/tag-demo.module';
import { ShareModule } from './../shared/shared.module';
import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [
    TagComponent
  ],
  exports: [
    TagComponent
  ],
  imports: [
    NelDemoTagModule,
    ShareModule,
    TagRoutingModule
  ]
})

export class TagModule { }
