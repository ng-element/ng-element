import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const zoomMotion: AnimationTriggerMetadata = trigger('zoomMotion', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scaleX(0)' }),
    animate(300, style({ opacity: 1, transform: 'scaleX(1)' }))
  ]),
  transition(':leave', [
    animate(300, style({ opacity: 0, transform: 'scaleX(0)' }))
  ])
]);

export const zoomTopMotion: AnimationTriggerMetadata = trigger('zoomTopMotion', [
  transition(':enter', [
    style({ transform: 'scaleY(0)', 'transform-origin': 'center top' }),
    animate(300, style({ transform: 'scaleY(1)', 'transform-origin': 'center bottom' }))
  ]),
  transition(':leave', [
    animate(300, style({ transform: 'scaleY(0)', 'transform-origin': 'center top' }))
  ])
]);

export const zoomBottomMotion: AnimationTriggerMetadata = trigger('zoomBottomMotion', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scaleY(0)', 'transform-origin': 'center bottom' }),
    animate(300, style({ opacity: 1, transform: 'scaleY(1)', 'transform-origin': 'center top' }))
  ]),
  transition(':leave', [
    animate(300, style({ opacity: 0, transform: 'scaleY(0)', 'transform-origin': 'center bottom' }))
  ])
]);