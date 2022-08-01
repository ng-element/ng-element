import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelSelectComponent } from './select.component';
import { NelOptionComponent } from './option.component';
import { NelSelectDropdownComponent } from './select-dropdown.component';

@NgModule({
  declarations: [
    NelSelectComponent,
    NelOptionComponent,
    NelSelectDropdownComponent
  ],
  exports: [
    NelSelectComponent,
    NelOptionComponent,
    NelSelectDropdownComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelOutletModule
  ]
})

export class NelSelectModule { }
