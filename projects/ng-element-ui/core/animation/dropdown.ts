import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const dropdownMotion: AnimationTriggerMetadata = trigger('dropdownMotion', [
  transition('void => into, leave => into', [
    style({
      opacity: 0,
      transform: 'scaleY(0)',
      'transform-origin': 'center top'
    }),
    animate(300, style({
      opacity: 1,
      transform: 'scaleY(1)',
      'transform-origin': 'center top'
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'scaleY(1)',
      'transform-origin': 'center top'
    }),
    animate(300, style({
      opacity: 0,
      transform: 'scaleY(0)',
      'transform-origin': 'center top'
    }))
  ])
]);
