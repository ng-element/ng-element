import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header.component';
import { AsideComponent } from './aside.component';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    FooterComponent
  ],
  exports: [
    ContainerComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    FooterComponent
  ]
})

export class NelContainerModule { }
