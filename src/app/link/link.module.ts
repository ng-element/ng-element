import { NgModule } from '@angular/core';
import { NelDemoLinkModule } from './../../../projects/ng-element-ui/link/demo/link-demo.module';
import { ShareModule } from './../shared/shared.module';
import { LinkRoutingModule } from './link-routing.module';
import { LinkComponent } from './link.component';

@NgModule({
  declarations: [
    LinkComponent
  ],
  exports: [
    LinkComponent
  ],
  imports: [
    NelDemoLinkModule,
    ShareModule,
    LinkRoutingModule
  ]
})

export class LinkModule { }
