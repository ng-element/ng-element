import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelScrollbarModule } from 'ng-element-ui/scrollbar';
import { NelBacktopModule } from 'ng-element-ui/backtop';
import { SharedModule } from '../shared/shared.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  exports: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    NelScrollbarModule,
    NelBacktopModule,
    ExampleRoutingModule,
    SharedModule
  ]
})

export class ExampleModule { }
