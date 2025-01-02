import { Component, ContentChildren, Input, TemplateRef, QueryList } from '@angular/core';

@Component({
    selector: 'nel-sub-menu',
    templateUrl: './sub-menu.component.html',
    standalone: false
})

export class NelSubMenuComponent {
  @Input() title?: string | TemplateRef<void>;
  @ContentChildren(NelSubMenuComponent) subMenus?: QueryList<NelSubMenuComponent>;
  level = 0;

  changeLevel(level: number): void {
    this.level = level + 1;
    this.subMenus?.forEach((item) => {
      item.changeLevel(this.level);
    });
  }
}
