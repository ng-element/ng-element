import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelScrollbarModule } from 'ng-element-ui/scrollbar';
import { NelBacktopModule } from 'ng-element-ui/backtop';
import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceComponent } from './resource.component';

@NgModule({
  declarations: [
    ResourceComponent
  ],
  exports: [
    ResourceComponent
  ],
  imports: [
    CommonModule,
    NelScrollbarModule,
    NelBacktopModule,
    ResourceRoutingModule
  ]
})

export class ResourceModule { }
