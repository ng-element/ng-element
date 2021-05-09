import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const fadeMotion: AnimationTriggerMetadata = trigger('fadeMotion', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(300, style({ opacity: 0 }))
  ])
]);
