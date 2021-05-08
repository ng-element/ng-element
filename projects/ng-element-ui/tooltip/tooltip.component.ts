import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'nel-tooltip',
  templateUrl: './tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
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
