import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const collapseMotion: AnimationTriggerMetadata = trigger('collapseMotion', [
  state('expanded', style({
    display: 'block',
    opacity: '1'
  })),
  state('collapsed', style({
    display: 'none',
    height: '0',
    opacity: '0'
  })),
  transition('expanded <=> collapsed', [
    style({ display: 'block' }),
    animate('300ms ease')])
]);
