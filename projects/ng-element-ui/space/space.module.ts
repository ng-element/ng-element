import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelSpaceComponent } from './space.component';
import { NelSpaceItemDirective } from './space.directive';

@NgModule({
  declarations: [
    NelSpaceComponent,
    NelSpaceItemDirective
  ],
  exports: [
    NelSpaceComponent,
    NelSpaceItemDirective
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelSpaceModule { }
