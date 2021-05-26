import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NelScrollbarComponent } from './scrollbar.component';

@NgModule({
  declarations: [
    NelScrollbarComponent
  ],
  exports: [
    NelScrollbarComponent
  ],
  imports: [
    ScrollingModule
  ]
})

export class NelScrollbarModule { }
