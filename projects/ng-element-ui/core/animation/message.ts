import { AnimationTriggerMetadata, style, transition, trigger, animate, state } from '@angular/animations';

export const messageMotion: AnimationTriggerMetadata = trigger('messageMotion', [
  state('done', style({
    opacity: 1,
    transform: 'translate(-50%, 0)'
  })),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translate(-50%, -100%)'
    }),
    animate(300, style({
      opacity: 1,
      transform: 'translate(-50%, 0)'
    }))
  ]),
  transition('start => done', [
    animate(300, style({
      opacity: 0,
      transform: 'translate(-50%, -100%)'
    }))
  ])
]);
