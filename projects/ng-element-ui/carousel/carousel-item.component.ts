import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'nel-carousel-item',
    templateUrl: './carousel-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'el-carousel__item',
        '[style.left]': 'left',
        '[style.top]': 'top',
    },
    standalone: false
})

export class NelCarouselItemComponent {
  left = '';
  top = '';
}
