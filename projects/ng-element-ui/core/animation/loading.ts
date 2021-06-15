import { AnimationTriggerMetadata, style, transition, trigger, animate, state } from '@angular/animations';

export const loadingMotion: AnimationTriggerMetadata = trigger('loadingMotion', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(300, style({ opacity: 0 }))
  ])
]);
