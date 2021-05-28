import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NelSpaceModule } from 'ng-element-ui/space';
import { NelCardModule } from 'ng-element-ui/card';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelRadioModule } from 'ng-element-ui/radio';
import { NelDividerModule } from 'ng-element-ui/divider';
import { NelDemoSpaceBasicComponent } from './space-demo-basic.component';
import { NelDemoSpaceDirectionComponent } from './space-demo-direction.component';
import { NelDemoSpaceSizeComponent } from './space-demo-size.component';
import { NelDemoSpaceSizeNumberComponent } from './space-demo-size-number.component';
import { NelDemoSpaceWrapComponent } from './space-demo-wrap.component';
import { NelDemoSpaceSpacerComponent } from './space-demo-spacer.component';
import { NelDemoSpaceAlignmentComponent } from './space-demo-alignment.component';

@NgModule({
  declarations: [
    NelDemoSpaceBasicComponent,
    NelDemoSpaceDirectionComponent,
    NelDemoSpaceSizeComponent,
    NelDemoSpaceSizeNumberComponent,
    NelDemoSpaceWrapComponent,
    NelDemoSpaceSpacerComponent,
    NelDemoSpaceAlignmentComponent
  ],
  exports: [
    NelDemoSpaceBasicComponent,
    NelDemoSpaceDirectionComponent,
    NelDemoSpaceSizeComponent,
    NelDemoSpaceSizeNumberComponent,
    NelDemoSpaceWrapComponent,
    NelDemoSpaceSpacerComponent,
    NelDemoSpaceAlignmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NelSpaceModule,
    NelCardModule,
    NelButtonModule,
    NelRadioModule,
    NelDividerModule
  ]
})

export class NelDemoSpaceModule { }
