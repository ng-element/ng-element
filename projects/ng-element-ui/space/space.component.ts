import { Component, TemplateRef, QueryList, ChangeDetectionStrategy, ContentChildren, Input } from '@angular/core';
import { NelSpaceItemDirective } from './space.directive';

@Component({
  selector: 'nel-space',
  templateUrl: './space.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'el-space',
    '[class.el-space--horizontal]': `nelDirection == 'horizontal'`,
    '[class.el-space--vertical]': `nelDirection == 'vertical'`,
    '[style.align-items]': 'nelAlignment',
    '[style.flex-wrap]': `nelWrap ? 'wrap' : ''`,
    '[style.margin-bottom]': `nelSpacer ? '' : '-' + size`,
  }
})

export class NelSpaceComponent {
  size = '8px';
  @ContentChildren(NelSpaceItemDirective, { read: TemplateRef }) items!: QueryList<TemplateRef<any>>;
  @Input() nelDirection: 'vertical' | 'horizontal' = 'horizontal';
  @Input() set nelSize(val: string | number | [number, number]) {
    let size = 0;
    if (typeof val === 'string') {
      switch (val) {
        case 'mini':
          size = 4;
          break;
        case 'small':
          size = 8;
          break;
        case 'medium':
          size = 12;
          break;
        case 'large':
          size = 16;
          break;
        default:
          size = 8;
          break;
      }
    } else if (typeof val === 'number') {
      size = val;
    } else {

    }
    this.size = size + 'px';
  }
  @Input() nelAlignment = 'center';
  @Input() nelWrap = false;
  @Input() nelSpacer?: string | TemplateRef<void>;
}
