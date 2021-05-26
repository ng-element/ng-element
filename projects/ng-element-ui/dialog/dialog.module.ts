import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDialogComponent } from './dialog.component';
import { NelDialogConfirmComponent } from './dialog-confirm.component';
import { NelDialogService } from './dialog.service';

@NgModule({
  declarations: [
    NelDialogComponent,
    NelDialogConfirmComponent
  ],
  exports: [
    NelDialogComponent,
    NelDialogConfirmComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelOutletModule,
    NelIconModule,
    NelButtonModule
  ],
  providers: [
    NelDialogService
  ]
})

export class NelDialogModule { }
