import { Component, Input } from '@angular/core';

@Component({
  selector: 'nel-tree-node',
  templateUrl: './tree-node.component.html'
})

export class NelTreeNodeComponent {
  @Input() data: Array<any> = [];
  @Input() leafLevel = 1;

  toggle(treeItem: any): void {
    if (treeItem.children) {
      if (!treeItem.init) {
        treeItem.init = true;
        treeItem.expand = true;
      } else {
        treeItem.expand = !treeItem.expand;
        if (!treeItem.expand && treeItem.children) {
          treeItem.children.forEach((item: any) => {
            item.expand = false;
          });
        }
      }
    }
  }
}
