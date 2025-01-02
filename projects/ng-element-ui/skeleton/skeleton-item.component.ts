import { Component, Input } from '@angular/core';

export type VariantType = 'p' | 'text' | 'h1' | 'h3' | 'caption' | 'button' | 'image' | 'circle' | 'rect';

@Component({
    selector: 'nel-skeleton-item',
    templateUrl: './skeleton-item.component.html',
    host: {
        class: 'el-skeleton__item',
        '[class.el-skeleton__p]': `nelVariant == 'p'`,
        '[class.el-skeleton__text]': `nelVariant == 'text'`,
        '[class.el-skeleton__h1]': `nelVariant == 'h1'`,
        '[class.el-skeleton__h3]': `nelVariant == 'h3'`,
        '[class.el-skeleton__caption]': `nelVariant == 'caption'`,
        '[class.el-skeleton__button]': `nelVariant == 'button'`,
        '[class.el-skeleton__image]': `nelVariant == 'image'`,
        '[class.el-skeleton__circle]': `nelVariant == 'circle'`,
        '[class.el-skeleton__rect]': `nelVariant == 'rect'`,
    },
    standalone: false
})

export class NelSkeletonItemComponent {
  @Input() nelVariant: VariantType | string = 'text';
}
