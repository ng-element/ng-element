import { Component, Input } from '@angular/core';

export type PositionType = 'left' | 'right' | 'center';
export type DirectionType = 'horizontal' | 'vertical';

@Component({
  selector: 'nel-divider',
  templateUrl: './divider.component.html'
})

export class DividerComponent {
  @Input() nelContentPosition: PositionType = 'center';
  @Input() nelDirection: DirectionType = 'horizontal';
}
