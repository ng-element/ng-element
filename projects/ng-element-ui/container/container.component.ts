import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { NelHeaderComponent } from './header.component';
import { NelFooterComponent } from './footer.component';

@Component({
    selector: 'nel-container',
    templateUrl: './container.component.html',
    host: {
        '[class.el-container]': 'true',
        '[class.is-vertical]': 'vertical'
    },
    standalone: false
})

export class NelContainerComponent implements AfterContentInit {
  @ContentChildren(NelHeaderComponent, { descendants: false }) headerList!: QueryList<NelHeaderComponent>;
  @ContentChildren(NelFooterComponent, { descendants: false }) footerList!: QueryList<NelFooterComponent>;
  vertical = false;

  ngAfterContentInit(): void {
    if (this.headerList.length > 0 || this.footerList.length > 0) {
      this.vertical = true;
    }
  }
}
