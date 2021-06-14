import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const messageBoxMotion: AnimationTriggerMetadata = trigger('messageBoxMotion', [
  transition('void => into', [
    style({
      opacity: 0,
      transform: 'translate(0, -20px)'
    }),
    animate(300, style({
      opacity: 1,
      transform: 'translate(0, 0)'
    }))
  ]),
  transition('into => leave', [
    style({
      opacity: 1,
      transform: 'translate(0, 0)'
    }),
    animate(300, style({
      opacity: 0,
      transform: 'translate(0, -20px)'
    }))
  ])
]);