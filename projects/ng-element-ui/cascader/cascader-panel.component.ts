import { Component } from '@angular/core';

@Component({
    selector: 'nel-cascader-panel',
    templateUrl: './cascader-panel.component.html',
    host: {
        'class': 'el-popper is-pure is-light el-cascader__dropdown',
        'tabindex': '-1',
        'aria-hidden': 'false',
        'role': 'tooltip'
    },
    standalone: false
})

export class NelCascaderPanelComponent {
  menuList: Array<any> = [];

  selectedOption(option: any, index: number): void {
    if (option.children?.length > 0) {
      if (index < this.menuList.length - 1) {
        this.menuList.splice(index + 1);
      }
      this.menuList.push(option.children);
    }
  }
}
