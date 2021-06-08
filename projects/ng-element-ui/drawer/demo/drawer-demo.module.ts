import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelDrawerModule } from 'ng-element-ui/drawer';
import { NelRadioModule } from 'ng-element-ui/radio';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDialogModule } from 'ng-element-ui/dialog';
import { NelDemoDrawerBasicComponent } from './drawer-demo-basic.component';
import { NelDemoDrawerHeaderComponent } from './drawer-demo-header.component';
import { NelDemoDrawerContentComponent } from './drawer-demo-content.component';
import { NelDemoDrawerMultiComponent } from './drawer-demo-multi.component';

@NgModule({
  declarations: [
    NelDemoDrawerBasicComponent,
    NelDemoDrawerHeaderComponent,
    NelDemoDrawerContentComponent,
    NelDemoDrawerMultiComponent
  ],
  exports: [
    NelDemoDrawerBasicComponent,
    NelDemoDrawerHeaderComponent,
    NelDemoDrawerContentComponent,
    NelDemoDrawerMultiComponent
  ],
  imports: [
    FormsModule,
    NelDrawerModule,
    NelRadioModule,
    NelButtonModule,
    NelDialogModule
  ]
})

export class NelDemoDrawerModule { }
