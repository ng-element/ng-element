import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollbarComponent } from './scrollbar.component';

@NgModule({
  declarations: [
    ScrollbarComponent
  ],
  exports: [
    ScrollbarComponent
  ],
  imports: [
    ScrollingModule
  ]
})

export class NelScrollbarModule { }
