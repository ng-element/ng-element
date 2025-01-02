import { Component, Input } from '@angular/core';

export type PositionType = 'left' | 'right' | 'center';
export type DirectionType = 'horizontal' | 'vertical';

@Component({
    selector: 'nel-divider',
    templateUrl: './divider.component.html',
    standalone: false
})

export class NelDividerComponent {
  @Input() nelContentPosition: PositionType = 'center';
  @Input() nelDirection: DirectionType = 'horizontal';
}
