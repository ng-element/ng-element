import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelButtonModule } from 'ng-element-ui/button';
import { DialogComponent } from './dialog.component';
import { DialogConfirmComponent } from './dialog-confirm.component';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [
    DialogComponent,
    DialogConfirmComponent
  ],
  exports: [
    DialogComponent,
    DialogConfirmComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelOutletModule,
    NelIconModule,
    NelButtonModule
  ],
  providers: [
    DialogService
  ]
})

export class NelDialogModule { }
