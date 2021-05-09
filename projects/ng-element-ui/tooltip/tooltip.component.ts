import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { fadeMotion } from 'ng-element-ui/core/animation';

@Component({
  selector: 'nel-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeMotion],
})

export class TooltipComponent {
  content!: string | TemplateRef<void>;
  arrowLeft = '';
  arrowRight = '';
  arrowTop = '';
  arrowBottom = '';
  transform = '';
  effect = 'dark';
}
