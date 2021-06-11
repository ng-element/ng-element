import { AnimationTriggerMetadata, state, style, trigger, transition, animate } from '@angular/animations';

export const notificationMotion: AnimationTriggerMetadata = trigger('notificationMotion', [
  transition('void => rightInto', [
    style({
      opacity: 0,
      transform: 'translate(100%, 0)'
    }),
    animate(300, style({
      opacity: 1,
      transform: 'translate(0, 0)'
    }))
  ]),
  transition('rightInto => leave', [
    style({
      opacity: 1,
      transform: 'translate(0, 0)'
    }),
    animate(300, style({
      opacity: 0,
      transform: 'translate(100%, 0)'
    }))
  ]),
  transition('void => leftInto', [
    style({
      opacity: 0,
      transform: 'translate(-100%, 0)'
    }),
    animate(300, style({
      opacity: 1,
      transform: 'translate(0, 0)'
    }))
  ]),
  transition('leftInto => leave', [
    style({
      opacity: 1,
      transform: 'translate(0, 0)'
    }),
    animate(300, style({
      opacity: 0,
      transform: 'translate(-100%, 0)'
    }))
  ]),
]);
