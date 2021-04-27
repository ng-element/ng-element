import { AfterContentInit, Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'nel-container',
  templateUrl: './container.component.html',
  host: {
    '[class.el-container]': 'true',
    '[class.is-vertical]': 'vertical'
  }
})

export class ContainerComponent implements AfterContentInit {
  @ContentChildren(HeaderComponent, { descendants: false }) headerList!: QueryList<HeaderComponent>;
  @ContentChildren(FooterComponent, { descendants: false }) footerList!: QueryList<FooterComponent>;
  vertical = false;

  ngAfterContentInit(): void {
    if (this.headerList.length > 0 || this.footerList.length > 0) {
      this.vertical = true;
    }
  }
}
