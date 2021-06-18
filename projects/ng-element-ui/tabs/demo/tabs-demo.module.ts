import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NelTabsModule } from 'ng-element-ui/tabs';
import { NelRadioModule } from 'ng-element-ui/radio';
import { NelDemoTabsBasicComponent } from './tabs-demo-basic.component';
import { NelDemoTabsTypeComponent } from './tabs-demo-type.component';
import { NelDemoTabsBorderCardComponent } from './tabs-demo-border-card.component';
import { NelDemoTabsPositionComponent } from './tabs-demo-position.component';
import { NelDemoTabsLabelComponent } from './tabs-demo-label.component';
import { NelDemoTabsEditableComponent } from './tabs-demo-editable.component';

@NgModule({
  declarations: [
    NelDemoTabsBasicComponent,
    NelDemoTabsTypeComponent,
    NelDemoTabsBorderCardComponent,
    NelDemoTabsPositionComponent,
    NelDemoTabsLabelComponent,
    NelDemoTabsEditableComponent
  ],
  exports: [
    NelDemoTabsBasicComponent,
    NelDemoTabsTypeComponent,
    NelDemoTabsBorderCardComponent,
    NelDemoTabsPositionComponent,
    NelDemoTabsLabelComponent,
    NelDemoTabsEditableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NelTabsModule,
    NelRadioModule
  ]
})

export class NelDemoTabsModule { }
