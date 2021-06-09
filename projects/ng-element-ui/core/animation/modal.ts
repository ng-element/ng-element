import { AnimationTriggerMetadata, trigger, style, animate, transition } from '@angular/animations';

export const modalMotion: AnimationTriggerMetadata = trigger('modalMotion', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translate3d(0, -20px, 0)'
    }),
    animate(300, style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    }),
    animate(300, style({
      opacity: 0,
      transform: 'translate3d(0, -20px, 0)'
    }))
  ]),
]);
