import { NgModule } from '@angular/core';
import { NelDividerModule } from 'ng-element-ui/divider';
import { NelIconModule } from 'ng-element-ui/icon';
import { DemoDividerBasicComponent } from './divider-demo-basic.component';
import { DemoDividerContentComponent } from './divider-demo-content.component';
import { DemoDividerDirectionComponent } from './divider-demo-direction.component';

@NgModule({
  declarations: [
    DemoDividerBasicComponent,
    DemoDividerContentComponent,
    DemoDividerDirectionComponent
  ],
  exports: [
    DemoDividerBasicComponent,
    DemoDividerContentComponent,
    DemoDividerDirectionComponent
  ],
  imports: [
    NelDividerModule,
    NelIconModule
  ]
})

export class NelDemoDividerModule { }
