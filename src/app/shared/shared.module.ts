import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './components/demo/demo.component';
import { HighLightPipe } from './pipe';

@NgModule({
  declarations: [
    DemoComponent,
    HighLightPipe
  ],
  exports: [
    DemoComponent,
    HighLightPipe
  ],
  imports: [
    CommonModule
  ]
})

export class ShareModule { }
