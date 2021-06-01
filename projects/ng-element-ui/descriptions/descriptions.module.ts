import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelDescriptionsComponent } from './descriptions.component';
import { NelDescriptionsItemComponent } from './descriptions-item.component';

@NgModule({
  declarations: [
    NelDescriptionsComponent,
    NelDescriptionsItemComponent
  ],
  exports: [
    NelDescriptionsComponent,
    NelDescriptionsItemComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelDescriptionsModule { }
