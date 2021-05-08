import { AnimationTriggerMetadata, state, style, trigger, animate, transition } from '@angular/animations';

export const dialogAnimations: {
  readonly fadeDialog: AnimationTriggerMetadata;
} = {
  fadeDialog: trigger('fadeAnimation', [
    state('default', style({ opacity: 1 })),
    transition('void => *', [style({ opacity: 0 }), animate('{{ fadeIn }}ms')]),
    transition(
      'default => closing',
      animate('{{ fadeOut }}ms', style({ opacity: 0 }))
    )
  ])
};

export type DialogAnimationState = 'default' | 'closing';
