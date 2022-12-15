import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { NelSubMenuComponent } from './sub-menu.component';

@Component({
  selector: 'nel-menu',
  templateUrl: './menu.component.html'
})

export class NelMenuComponent implements AfterContentInit {
  @ContentChildren(NelSubMenuComponent) subMenus?: QueryList<NelSubMenuComponent>;
  level = 0;

  ngAfterContentInit(): void {
    this.subMenus?.forEach((item) => {
      item.changeLevel(this.level);
    });
  }
}
