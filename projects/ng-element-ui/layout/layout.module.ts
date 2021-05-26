import { NgModule } from '@angular/core';
import { NelRowDirective } from './row.directive';
import { NelColDirective } from './col.directive';

@NgModule({
  declarations: [
    NelRowDirective,
    NelColDirective
  ],
  exports: [
    NelRowDirective,
    NelColDirective
  ],
})

export class NelLayoutModule { }
