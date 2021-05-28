import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CodeComponent } from './components/code/code.component';
import { DemoComponent } from './components/demo/demo.component';
import { DocComponent } from './components/doc/doc.component';
import { HighLightPipe, MarkedPipe } from './pipe';

@NgModule({
  declarations: [
    CodeComponent,
    DemoComponent,
    DocComponent,
    HighLightPipe,
    MarkedPipe
  ],
  exports: [
    CodeComponent,
    DemoComponent,
    DocComponent,
    HighLightPipe,
    MarkedPipe
  ],
  imports: [
    CommonModule,
    ClipboardModule
  ]
})

export class SharedModule { }
