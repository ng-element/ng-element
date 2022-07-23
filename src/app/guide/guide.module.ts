import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelScrollbarModule } from 'ng-element-ui/scrollbar';
import { NelBacktopModule } from 'ng-element-ui/backtop';
import { SharedModule } from '../shared/shared.module';
import { GuideRoutingModule } from './guide-routing.module';
import { GuideComponent } from './guide.component';

@NgModule({
  declarations: [
    GuideComponent
  ],
  exports: [
    GuideComponent
  ],
  imports: [
    CommonModule,
    NelScrollbarModule,
    NelBacktopModule,
    SharedModule,
    GuideRoutingModule
  ]
})

export class GuideModule { }
